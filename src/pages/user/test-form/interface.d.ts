import type { UserItem } from '../interface/base'

export type UserFormItem = Omit<UserItem, 'key' | 'created'>
