/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BeanCollection, GroupCellRendererParams } from 'ag-grid-community'
import { useCallback, useRef, useState } from 'react'

const GroupCellRenderer = (props: GroupCellRendererParams) => {
  const { node, value } = props
  const beans = (node as any).beans as BeanCollection
  const { rowModel } = beans
  const [expanded, setExpanded] = useState(false)

  const eGui = useRef<HTMLElement | null>(null)
  const eValueRef = useRef<HTMLElement>(null)

  const dispatchExpandedEvent = useCallback(() => {
    return setTimeout(() => {
      ;(rowModel as any).onRowGroupOpened()
    }, 0)
  }, [rowModel])

  const toogle: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation()
    node.expanded = !expanded
    setExpanded(node.expanded)
    ;(node as any)?.dispatchRowEvent('expandedChanged')
    dispatchExpandedEvent()
    beans.rowRenderer.refreshCells({ rowNodes: [node] })
  }

  return (
    <span className={'ag-cell-wrapper'} ref={eGui}>
      <span onClick={toogle}>{expanded ? '-' : '+'}</span>
      <span className="ag-group-value" ref={eValueRef}>
        {value}
      </span>
    </span>
  )
}

export default GroupCellRenderer
