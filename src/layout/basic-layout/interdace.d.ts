import type { MenuDataItem } from '@ant-design/pro-layout'

export interface BasicMenuDataItem extends Omit<MenuDataItem, 'routes'> {
  authority?: string | string[];
  children?: BasicMenuDataItem[];
}
