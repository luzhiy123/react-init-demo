/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridOptions, StageExecuteParams } from 'ag-grid-community'
import { _exists, BeanStub, RowNode } from 'ag-grid-community'

export class DetailBeanStub extends BeanStub {
  beanName = 'flattenStage' as const

  public refreshProps: Set<keyof GridOptions<any>> = new Set([])
  public execute(params: StageExecuteParams): RowNode[] {
    const rootNode = params.rowNode
    const baseRows = rootNode.childrenAfterSort
    return this.getAllDisplayRows(baseRows)
  }

  private getDetail(masterNode: RowNode): RowNode | null {
    if (!masterNode.expanded) {
      return null
    }

    let detailNode = masterNode.detailNode
    if (detailNode) {
      return detailNode
    }

    detailNode = new RowNode(this.beans)
    detailNode.detail = true
    detailNode.selectable = false
    detailNode.parent = masterNode

    if (_exists(masterNode.id)) {
      detailNode.id = 'detail_' + masterNode.id
    }

    detailNode.data = masterNode.data
    detailNode.level = masterNode.level + 1
    masterNode.detailNode = detailNode

    return detailNode
  }

  private getAllDisplayRows(baseRows: RowNode[] | null) {
    const rowNodes: RowNode[] = []
    if (!baseRows?.length) {
      return rowNodes
    }
    for (let i = 0; i < baseRows.length; i++) {
      const rowNode = baseRows[i]
      rowNodes.push(rowNode)
      const detailNode = this.getDetail(rowNode)

      if (detailNode) {
        rowNodes.push(detailNode)
      }
    }
    return rowNodes
  }
}
