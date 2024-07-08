// 重置Object.keys类型
export const getObjKeys = Object.keys as <T>(obj: T) => (keyof T)[]

export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}
