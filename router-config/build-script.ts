import fs from 'fs';
import path from 'path';
import type { RouteConfig } from '.';
import routesConfig from '.';

const imLines: string[] = [];

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 序列化一个 RouteConfig 对象，生成对应的 TSX 代码片段
 * @param route RouteConfig 对象
 * @param indent 缩进字符串
 */
function serializeRoute(route: RouteConfig, indent = '  '): string {
  const lines: string[] = [];
  lines.push('{');

  // 输出 path（如果有）
  if (route.path) {
    lines.push(`${indent}path: ${JSON.stringify(route.path)},`);
  }

  // 如果有 redirect，则生成 element 为 <Navigate to="xxx" />
  if (route.redirect) {
    lines.push(`${indent}element: <Navigate to=${JSON.stringify(route.redirect)} />,`);
  } else if (route.component) {
    // 如果有 component，则使用 React.lazy 动态加载
    const name = capitalizeFirstLetter(route.name || route.path || '');
    imLines.push(`const ${name} =  React.lazy(() => import(${JSON.stringify(route.component)}))`);
    lines.push(`${indent}element:  (
      <Suspense fallback={<div>Loading...</div>}>
        <${name} />
      </Suspense>
    ),`);
  }

  // 将 name、authority、meta 挂在 handle 属性上（如果存在任一属性）
  if (route.name || route.authority || route.meta) {
    lines.push(`${indent}handle: {`);
    if (route.name) {
      lines.push(`${indent}${indent}name: ${JSON.stringify(route.name)},`);
    }
    if (route.authority) {
      lines.push(`${indent}${indent}authority: ${JSON.stringify(route.authority)},`);
    }
    if (route.meta) {
      // 直接转换为对象字面量字符串
      lines.push(`${indent}${indent}meta: ${JSON.stringify(route.meta, null, indent)},`);
    }
    lines.push(`${indent}},`);
  }

  // 如果存在嵌套路由，则递归处理 children
  if (route.routes && route.routes.length > 0) {
    lines.push(`${indent}children: [`);
    for (const child of route.routes) {
      lines.push(indent + indent + serializeRoute(child, indent + indent));
    }
    lines.push(`${indent}],`);
  }

  lines.push('}');
  return lines.join('\n');
}

/**
 * 根据 routesConfig 生成完整的路由配置文件代码
 */
function generateRouteFile(config: RouteConfig[]): string {
  const routeObjects = config.map(item => serializeRoute(item)).join(',\n');
  // 生成文件内容，注意导入 React、Navigate 和 RouteObject
  const content = `import React, { Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

${imLines.join('\n')}

const routes: RouteObject[] = [
${routeObjects}
];

export default routes;
`;
  return content;
}

// 生成路由配置代码
const fileContent = generateRouteFile(routesConfig);

// 将生成的代码写入 route.tsx 文件（文件路径根据需要调整）
const outputPath = path.join(__dirname, '../src/router/content-router.tsx');
fs.writeFileSync(outputPath, fileContent, 'utf8');

console.log(`路由配置文件已生成到：${outputPath}`);
