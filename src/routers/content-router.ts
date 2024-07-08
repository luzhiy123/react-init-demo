import Home from '@/pages/home'
import Table from '@/pages/table'
import type { RouteObject } from 'react-router-dom'

const contentRouter: RouteObject[] = [
  {
    path: 'home',
    Component: Home
  },
  {
    path: 'table',
    Component: Table
  }
]

export default contentRouter
