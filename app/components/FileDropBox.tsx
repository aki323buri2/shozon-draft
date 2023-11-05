"use client"
import { useRef, useState, useCallback } from "react"
import { Button } from "@material-tailwind/react"

export default function FileDropBox() {
  const [file, setFile] = useState<File>()
  const uploadInputRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      uploadInputRef.current?.click()
      return
    }
    try {
      const data = new FormData()
      data.set("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }
  return (
    <form onSubmit={onSubmit} className="max-wl">
      <label
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
      >
        <span className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="font-medium text-gray-600">
            Drop files to Attach, or 
            {" "}
            <span className="text-blue-600 underline">browse</span>
          </span>
        </span>
        <input 
          type="file" 
          name="file_upload" 
          className="hidden" 
          onChange={(e) => setFile(e.target.files?.[0])}
          ref={uploadInputRef}
        />
      </label>
      <div className="flex flex-col">
        <Button 
          variant="gradient" 
          className="flex items-center gap-3" 
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          {file ? `${file?.name} をアップロード` : "ファイルを選択"}
        </Button>
      </div>
    </form>
  )
}