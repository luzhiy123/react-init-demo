import { GroupCellRenderer, ZsDetailModule } from '@/components/master-detail'
import type { ColDef, FilterModel, GridApi, GroupCellRendererParams } from 'ag-grid-community'
import {
  ClientSideRowModelModule,
  RowApiModule,
  TextFilterModule,
  ValidationModule
} from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { AgGridReact } from 'ag-grid-react'
import { Button, Space } from 'antd'
import { useRef, useState } from 'react'
import FullWidthCellRenderer from './cell-render'

const rowData1 = [
  { id: 1, name: 'Alice', age: 25, six: 1 },
  { id: 2, name: 'Bob', age: 30, six: 1 },
  { id: 3, name: 'Charlie', age: 35, six: 2 }
]
const rowData2 = [
  { id: 3, name: 'Charlie', age: 35, six: 2 },
  { id: 4, name: 'MMM', age: 25, six: 1 },
  { id: 5, name: 'NNN', age: 30, six: 1 },
  { id: 6, name: 'QQQ', age: 35, six: 2 }
]
const defaultColDef = {
  sortable: true,
  filter: true, // 开启过滤
  resizable: true
}
const App = () => {
  const gridRef = useRef(null)
  const gridApi = useRef<GridApi>()
  const [rowData, setRowData] = useState(rowData1)

  const columnDefs: ColDef[] = [
    {
      field: 'name',
      headerName: '姓名',
      pinned: 'left',
      filter: true,
      cellRenderer: 'zsDetail',
      valueFormatter({ value }) {
        return `${value}-A`
      }
    },
    {
      field: 'age',
      headerName: '年龄'
    },
    {
      field: 'six',
      headerName: '性别'
    },
    {
      field: 'action',
      pinned: 'right',
      headerName: '操作',
      cellRenderer() {
        return (
          <Space>
            <Button type="link">修改</Button>
          </Space>
        )
      }
    }
  ]

  const changeFilter = () => {
    const model: FilterModel = {}
    model.name = {
      filterType: 'text',
      type: 'contains',
      filter: 'Bob'
    }
    gridApi.current?.setFilterModel(model)
    gridApi.current?.onFilterChanged()
  }
  const changeData = () => {
    setRowData(rowData === rowData1 ? rowData2 : rowData1)
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <Button onClick={changeFilter}>过滤</Button>
      <Button onClick={changeData}>刷新数据</Button>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        getRowId={({ data }) => {
          return data.id
        }}
        modules={[
          ClientSideRowModelModule,
          ZsDetailModule,
          RowApiModule,
          ValidationModule,
          TextFilterModule
        ]}
        onGridReady={(e) => (gridApi.current = e.api)}
        components={{
          zsDetail: GroupCellRenderer
        }}
        fullWidthCellRenderer={(params: GroupCellRendererParams) => {
          return <FullWidthCellRenderer {...params} />
        }}
      />
    </div>
  )
}

export default App
