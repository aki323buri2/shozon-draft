import useSWR from "swr"

export interface FilenameParts{
  busho?: string | undefined
  tori?: string  | undefined
  syoymd?: string  | undefined
  gyomu?: string  | undefined
  kin?: number | undefined
}

const fallbackData = {
  busho: undefined, 
  tori: undefined, 
  syoymd: undefined, 
  kin: null, 
}

export function useFilename(): {
  filename: string , 
  setFilename: (parts: FilenameParts) => void 
} {
  const { data: filename, mutate: setFilenameSWR } = useSWR("filename", null, {
    fallbackData, 
  })
  const setFilename = (parts: FilenameParts) => {
    const newFilename = {
      ...filename, 
      ...parts
    }
    setFilenameSWR(newFilename)
  }
  return {
    filename, 
    setFilename, 
  }
}