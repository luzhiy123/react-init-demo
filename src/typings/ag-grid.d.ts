import '@ag-grid-community'

declare module '@ag-grid-community' {
  // 扩展 Module 接口，允许自定义 moduleName 为任意字符串
  export interface Module {
    moduleName: string
  }
}
