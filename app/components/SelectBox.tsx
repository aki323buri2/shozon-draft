"use client"
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"
import { SelectTable } from "./SelectTable"
 
export default function SelectBox({
  label="label", 
  id="id", 
  description, 
}: {
  label?:string 
  id?:string
  description?:string 
}) {
  const [search, setSearch] = useState("")
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button>{label}を検索</Button>
      </PopoverHandler>
      <PopoverContent className="">

        <SelectTable id={id} label={label} />

      </PopoverContent>
    </Popover>
  );
}
