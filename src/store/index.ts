import { MobXProviderContext } from 'mobx-react'
import { useContext } from 'react'
import UserStore from './user-store'

export const userStore = new UserStore()

export const RootStore = {
  user: userStore
}

export function useStore<T extends typeof RootStore, V extends keyof T>(name: V): T[V] {
  const store = useContext(MobXProviderContext) as T
  return store[name]
}
