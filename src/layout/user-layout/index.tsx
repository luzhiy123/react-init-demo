import { Outlet } from 'react-router-dom'
import styles from './index.scss'

const UserLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout
