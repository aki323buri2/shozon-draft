"use client"
import { Input } from "@material-tailwind/react"
import { ChangeEvent, useRef } from "react"

export default function TextField({
  label = "label", 
  id = "id",  
  onChange, 
  value, 
}: {
  label?:string 
  id?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}) {
  const ref =  useRef<HTMLInputElement>(null)
  return (
    <Input
      label={label}
      id={id}
      name={id} 
      ref={ref}
      crossOrigin={undefined}
      value={value}
      onChange={onChange}
    />
  )
}