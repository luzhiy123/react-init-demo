// stylelint.config.js
export default {
  extends: [
    'stylelint-config-standard-scss', // 标准 SCSS 规则
    'stylelint-config-prettier', // 关闭与 Prettier 冲突的规则:contentReference[oaicite:7]{index=7}:contentReference[oaicite:8]{index=8}
  ],
  plugins: ['stylelint-order'], // 用于自定义属性顺序
  rules: {
    // 内容块内元素顺序：自定义属性先行，然后是其它声明
    'order/order': ['custom-properties', 'declarations'],
    // 属性顺序：可按逻辑分组或字母顺序，未列出的置于底部并按字母排列
    'order/properties-order': [
      [
        // 示例：将常见布局属性放在前面
        { properties: ['display', 'position', 'top', 'right', 'bottom', 'left'] },
        { properties: ['width', 'height', 'margin', 'padding'] },
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
