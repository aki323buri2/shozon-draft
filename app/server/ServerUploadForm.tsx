// https://ethanmick.com/how-to-upload-a-file-in-next-js-13-app-directory/

import { writeFile } from "fs/promises"
import { join } from "path"

export default function ServerUploadForm() {
  async function upload(data: FormData) {
    "use server"

    const file: File | null = data.get("file") as unknown as File
    if (!file) {
      throw new Error("No file uploaded")
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we"ll just write it to the filesystem in a new location
    // const path = `temp/${file.name}`
    const path = join(".", "temp", file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return { success: true }
  }

  return (
    <div>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" 
        />
        <input type="submit" value="Upload" />
      </form>
    </div>
  )
}
