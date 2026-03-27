import * as fs from 'node:fs';
import * as path from 'node:path';
import type { RouteConfig } from './index';
import routesConfig from './index';

const importLines: string[] = [];
let importIndex = 0;

function createImportName(route: RouteConfig): string {
  importIndex += 1;
  const routeName = route.name ?? route.path ?? `route${importIndex}`;
  const normalized = routeName.replace(/[^a-zA-Z0-9]/g, ' ').trim();
  const pascal = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join('');

  return pascal || `Route${importIndex}`;
}

function serializeRoute(route: RouteConfig, indent = '  '): string {
  const lines: string[] = ['{'];

  if (route.path) {
    lines.push(`${indent}path: ${JSON.stringify(route.path)},`);
  }

  if (route.redirect) {
    lines.push(`${indent}element: <Navigate to=${JSON.stringify(route.redirect)} replace />,`);
  }

  if (route.component) {
    const importName = createImportName(route);
    importLines.push(
      `const ${importName} = React.lazy(() => import(${JSON.stringify(route.component)}));`,
    );

    lines.push(`${indent}element: (`);
    lines.push(`${indent}  <Suspense fallback={<div>Loading...</div>}>`);
    lines.push(`${indent}    <${importName} />`);
    lines.push(`${indent}  </Suspense>`);
    lines.push(`${indent}),`);
  }

  if (route.name || route.authority || route.meta) {
    lines.push(`${indent}handle: {`);
    if (route.name) {
      lines.push(`${indent}  name: ${JSON.stringify(route.name)},`);
    }
    if (route.authority) {
      lines.push(`${indent}  authority: ${JSON.stringify(route.authority)},`);
    }
    if (route.meta) {
      lines.push(`${indent}  meta: ${JSON.stringify(route.meta)},`);
    }
    lines.push(`${indent}},`);
  }

  if (route.routes?.length) {
    lines.push(`${indent}children: [`);
    lines.push(
      route.routes.map((child) => `${indent}  ${serializeRoute(child, `${indent}  `)}`).join(',\n'),
    );
    lines.push(`${indent}],`);
  }

  lines.push('}');
  return lines.join('\n');
}

function generateRouteFile(config: RouteConfig[]): string {
  const routeObjects = config.map((route) => serializeRoute(route)).join(',\n');

  return `import React, { Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

${importLines.join('\n')}

const generatedRoutes: RouteObject[] = [
${routeObjects}
];

export default generatedRoutes;
`;
}

const outputPath = path.join(__dirname, '../src/router/generated-routes.tsx');
const fileContent = generateRouteFile(routesConfig);

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Route config generated at ${outputPath}`);
