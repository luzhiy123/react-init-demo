import Home from '@/pages/home'
import Table from '@/pages/user/table'
import TestForm from '@/pages/user/test-form'
import type { RouteObject } from 'react-router-dom'

const contentRouter: RouteObject[] = [
  {
    path: 'home',
    Component: Home
  },
  {
    path: 'table',
    Component: Table
  },
  {
    path: 'form',
    Component: TestForm
  }
]

export default contentRouter
