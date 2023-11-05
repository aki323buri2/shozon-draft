"use client"
import React from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

export interface SearchListItemType {
  value: string 
  label: string 
}
export default function SearchList({
  items, 
}: {
  items?: SearchListItemType[]
}) {
  const [selected, setSelected] = React.useState("");
  const setSelectedItem = (value:string) => setSelected(value);

  if (items === undefined) {
    items = [
      { value: "inbox", label: "Inbox" }, 
      { value: "trash", label: "Trash" }, 
      { value: "settings", label: "Settings" }, 
    ]
  }
 
  return (
    <Card className="w-96">
      <List>
        {items.map(({value, label}) => (
          <ListItem selected={selected === value} onClick={() => setSelectedItem(value)}>
            {label}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}