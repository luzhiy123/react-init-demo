import { Table } from 'antd'
import type { ColumnType } from 'antd/es/table'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import type { TableItem } from './table-service'
import { TabseService } from './table-service'

const columns: ColumnType<TableItem>[] = [
  {
    dataIndex: 'name',
    title: '姓名'
  },
  {
    dataIndex: 'age',
    title: '年龄'
  },
  {
    dataIndex: 'city',
    title: '城市'
  },
  {
    dataIndex: 'created',
    title: '录入时间'
  }
]

const service = new TabseService()

function TablePage() {
  useEffect(() => {
    service.loadData()
  }, [])

  return <Table dataSource={service.data} columns={columns} />
}

export default observer(TablePage)
