/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Module } from 'ag-grid-community'
import { DetailBeanStub } from './detail-bean-stub'

export const ZsDetailModule: Module = {
  moduleName: 'ZsDetail' as any,
  version: '33.1.1',
  beans: [DetailBeanStub]
}
