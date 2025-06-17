import { observer } from 'mobx-react-lite'
import styles from './index.module.scss'

function Demo() {
  return <div className={styles.content}>demo</div>
}

export default observer(Demo)
