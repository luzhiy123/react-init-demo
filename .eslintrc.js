module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',

    // 统一配置
    semi: [2, 'never'], //末尾不要分号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ], //使用单引号
    'space-infix-ops': 2, //中缀运算符周围有空格
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ], //禁止变量声明时用逗号一次声明多个
    // 'space-before-function-paren': ['error', 'never'], //禁止在函数括号之前有空格
    'no-multiple-empty-lines': 2, //禁止多余的空行
    'no-multi-spaces': 2, //禁止出现多个空格
    indent: [
      2,
      2,
      {
        VariableDeclarator: 'first',
        SwitchCase: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          body: 1,
          parameters: 2
        },
        ArrayExpression: 1,
        ObjectExpression: 1
      }
    ], //缩进
    'comma-dangle': [2, 'never'], //数组或者对象的末位不允许尾随逗号
    'no-trailing-spaces': ['error'], //禁止行尾空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ], //关键字后有空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ] //逗号后有空格
  }
}
