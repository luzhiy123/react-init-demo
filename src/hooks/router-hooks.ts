import { useLocation } from 'react-router-dom'

export function useQuery(key: string) {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  return searchParams.get(key)
}
export function useQuerys(keys: string[]) {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  return keys.map((item) => searchParams.get(item)) as string[]
}
