import { Result } from 'antd'
import React from 'react'
import type { IAuthorityType } from './check'
import check from './check'

interface AuthorizedProps {
  authority: IAuthorityType;
  userAuthority: string[];
  noMatch?: React.ReactNode;
}

type IAuthorizedType = React.FC<React.PropsWithChildren<AuthorizedProps>> & {
  check: typeof check;
};

const Authorized: React.FC<React.PropsWithChildren<AuthorizedProps>> = ({
  children,
  authority,
  userAuthority,
  noMatch = (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  )
}) => {
  const childrenRender: React.ReactNode = typeof children === 'undefined' ? null : children
  const dom = check(authority, userAuthority, childrenRender, noMatch)
  return <>{dom}</>
}

export default Authorized as IAuthorizedType
