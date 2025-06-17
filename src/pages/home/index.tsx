import IconFont from '@/components/icon-font';
import { useStore } from '@/store';
import { Modal } from 'antd';
import { observer } from 'mobx-react-lite';

function Home() {
  const userStore = useStore('user');
  return (
    <div>
      <h3>用户名： {userStore.user?.name}</h3>
      <IconFont type="icon-xiangmu" />
      <Modal>aaaa</Modal>
    </div>
  );
}

export default observer(Home);
