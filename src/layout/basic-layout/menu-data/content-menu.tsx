import type { BasicMenuDataItem } from '../interdace'

const fortressMachine: BasicMenuDataItem = {
  name: 'Demo',
  key: 'demo',
  icon: 'icon-renwu2',
  children: [
    {
      name: 'Home',
      path: '/home',
      authority: 'home'
    },
    {
      name: 'Table',
      path: '/table',
      authority: 'table'
    },
    {
      name: 'NoPerm',
      path: '/noperm',
      authority: 'no-perm'
    }
  ]
}
export default fortressMachine
