import type { BasicMenuDataItem } from '../interdace'

const fortressMachine: BasicMenuDataItem = {
  name: 'Demo',
  key: 'demo',
  icon: 'icon-renwu2',
  children: [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Table',
      path: '/table',
      authority: 'table'
    },
    {
      name: 'Form',
      path: '/form',
      authority: 'form'
    },
    {
      name: 'NoPerm',
      path: '/noperm',
      authority: 'no-perm'
    }
  ]
}
export default fortressMachine
