import Mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

const { list } = Mock.mock({
  'list|5-100': [
    {
      key: '@guid',
      name: '@cname',
      'age|0-100': 100,
      city: '@city(true)',
      created: '@datetime'
    }
  ]
})

export default [
  {
    url: '/api/getList',
    method: 'get',
    response: () => {
      return {
        status: 'ok',
        data: list,
        total: list.length
      }
    }
  },
  {
    url: '/api/user/self',
    method: 'get',
    response: () => {
      return Mock.mock({
        status: 'ok',
        data: {
          key: '@guid',
          name: '@cname',
          'age|0-100': 100,
          city: '@city(true)',
          created: '@datetime',
          resources: ['table', 'home']
        }
      })
    }
  }
] as MockMethod[]
