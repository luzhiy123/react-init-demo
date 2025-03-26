/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BeanCollection, GroupCellRendererParams } from 'ag-grid-community'
import { useEffect, useRef } from 'react'

const FullWidthCellRenderer = (props: GroupCellRendererParams) => {
  const { data, node, api } = props
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const beans = (node as any).beans as BeanCollection
    if (containerRef.current) {
      const newHeight = containerRef.current!.offsetHeight
      node.setRowHeight(newHeight)
      ;(beans.rowModel as any)?.onRowHeightChanged()
    }
  }, [data, node, api])

  return (
    <div ref={containerRef} style={{ padding: '8px' }}>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </div>
  )
}

export default FullWidthCellRenderer
