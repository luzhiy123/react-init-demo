import IconFont from '@/components/icon-font'
import { useStore } from '@/store'
import { observer } from 'mobx-react'

function Home() {
  const userStore = useStore('user')
  return (
    <div>
      <h3>用户名： {userStore.user?.name}</h3>
      <IconFont type="icon-xiangmu" />
    </div>
  )
}

export default observer(Home)
