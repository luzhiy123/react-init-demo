export interface RouteConfig {
  path?: string
  name?: string
  authority?: string
  component?: string
  meta?: Record<string, string>
  routes?: RouteConfig[]
  redirect?: string
}

const routesConfig: RouteConfig[] = [
  { path: '/', redirect: '/home' },
  {
    path: 'home',
    name: 'home',
    component: '@/pages/home',
    meta: {
      title: 'home'
    }
  },
  { path: 'demo', name: 'demo', component: '@/pages/demo' },
  {
    path: 'table',
    name: 'table',
    component: '@/pages/user/table',
    meta: {
      title: 'table'
    }
  },
  { path: 'form', name: 'form', component: '@/pages/user/test-form' }
]

export default routesConfig
