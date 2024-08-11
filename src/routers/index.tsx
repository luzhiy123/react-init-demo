import { BasicLayout } from '@/layout'
import { createBrowserRouter } from 'react-router-dom'
import contentRouter from './content-router'

const routerObjs = [...contentRouter]

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
