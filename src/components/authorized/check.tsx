export type IAuthorityType =
  | undefined
  | string
  | string[]
  | ((currentAuthority: string[]) => IAuthorityType);

/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 | Permission judgment } authority
 * @param { 通过的组件 | Passing components } target
 * @param { 未通过的组件 | no pass components } Exception
 */
const check = <T, K>(
  authority: IAuthorityType, // 路由中配置点
  userAuthority: string[],
  target: T,
  Exception: K,
): T | K => {
  if (!authority) {
    return target
  }
  // 数组处理
  if (Array.isArray(authority)) {
    if (
      userAuthority.some((item) =>
        authority.some((it) => {
          return `${item}.`.startsWith(`${it}.`)
        }),
      )
    ) {
      return target
    }

    return Exception
  }

  // string 处理
  if (typeof authority === 'string') {
    const judge = `${authority}.`
    if (userAuthority.some((item) => `${item}.`.startsWith(judge))) {
      return target
    }
    return Exception
  }

  // Function 处理
  if (typeof authority === 'function') {
    try {
      const bool = authority(userAuthority)
      if (bool) {
        return target
      }
      return Exception
    } catch (error) {
      throw error
    }
  }
  throw new Error('unsupported parameters')
}

export default check
