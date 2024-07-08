import Authorized from '@/components/authorized'
import type { BasicMenuDataItem } from '../interdace'
import contentMenu from './content-menu'

const baseMenuData: BasicMenuDataItem[] = [contentMenu]

const checkMenuData = (
  userAuthority: string[],
  menuList?: BasicMenuDataItem[],
): BasicMenuDataItem[] | undefined =>
  menuList
    ?.map((item) => Authorized.check(item.authority, userAuthority, item, null))
    .filter((item) => item)
    .map((item) => ({
      ...item,
      // children 为空数组和不存在代表两个情况
      children: (item?.children && checkMenuData(userAuthority, item.children)) || undefined
    }))
    .filter((item) => !item.children || item.children.length !== 0)

export { baseMenuData, checkMenuData }
