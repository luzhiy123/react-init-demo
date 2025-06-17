import Loading from '@/components/loading'
import { rootStore, StoresProvider } from '@/store'
import '@ant-design/v5-patch-for-react-19'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export default function App() {
  return (
    <StoresProvider value={rootStore}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </StoresProvider>
  )
}
