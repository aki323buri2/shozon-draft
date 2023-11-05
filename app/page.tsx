"use client"
import Link from "next/link"
import TextField from "./components/TextField"
import SelectBox from "./components/SelectBox"
import FileDropBox from "./components/FileDropBox"
import { useFilename } from "./hooks/filename"
import { ChangeEvent } from "react"

export default function Page () {
  const { filename, setFilename  } = useFilename()
  const handleBushoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilename({ busho: e.target.value })
  }
  const handleToriChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilename({ tori: e.target.value })
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="about">about</Link>
      <div className="flex p2 flex-col flex-wrap gap-2">
        <TextField label="部署" id="busho" onChange={handleBushoChange} />
        <SelectBox label="部署" id="tori-selector" />
        <TextField label="取引先" id="tori" onChange = {handleToriChange} />
        <SelectBox label="取引先" id="tori-selector" />
        
        <FileDropBox />

        <p className="flex">
          {filename.busho}#{filename.tori}
        </p>
      </div>

    </main>
  )
}