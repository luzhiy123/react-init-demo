import { createContext, useContext } from 'react';
import UserStore from './user-store';

export const userStore = new UserStore();

type RootStore = {
  user: UserStore;
};
export const rootStore = {
  user: userStore,
};

const StoresContext = createContext<RootStore | null>(null);

export const StoresProvider = StoresContext.Provider;

export function useStore<T extends RootStore, V extends keyof T>(name: V): T[V] {
  const store = useContext(StoresContext) as T;
  return store[name];
}
