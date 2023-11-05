import useSWR from "swr"
export function useFilename(
  initialCount: number
): [
  number, 
  (count: number) => void, 
] {
  const { data: count, mutate: setCount } = useSWR("count", null, {
    fallbackData: initialCount, 
  })

  return [count as number, setCount]
}