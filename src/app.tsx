import Loading from '@/components/loading'
import { RootStore } from '@/store'
import { Provider as MobxProvider } from 'mobx-react'
import { RouterProvider } from 'react-router-dom'
import router from './routers'

export default function App() {
  return (
    <MobxProvider {...RootStore}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </MobxProvider>
  )
}
