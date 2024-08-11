import { BasicLayout } from '@/layout'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import contentRouter from './content-router'

const routerObjs: RouteObject[] = [...contentRouter]

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: BasicLayout,
    children: contentRouter
  }
])

export { routerObjs }

export default router
