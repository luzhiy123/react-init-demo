import 'react-router-dom'

declare module 'react-router-dom' {
  export interface ILayoutMeta {
    logined?: boolean
    title?: string
  }
}
