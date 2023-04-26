import { Item } from '../types/types'
import { useEffect, useState } from 'react'
import './image.css'

type ImageItemParams = {
  item: Item,
  list: boolean,
  selected?: number[],
  setSelected?: any
}

export const ImageItem = ({ item, list, selected, setSelected }: ImageItemParams) => {
  const [isSelected, setSelection] = useState<boolean>(false)

  const handleSelectionOnClick = () => {
    console.log();
    if (list && selected) {
      if (document.getElementsByClassName("selected").length <= 1) {
        setSelection(!isSelected)
      } else {
        setSelection(false)
      }
      if (!isSelected) {
        setSelected([...selected, ...[item.id]])
      } else {
        const filteredSelected = selected.filter(selectedItem => selectedItem !== item.id)
        setSelected(filteredSelected)
      }
    }
  }

  const itemsCss = () => {
    if (!list) {
      return {
        filter: "brightness(225%)",

      }
    } else {
      return {
        cursor: "pointer"
      }
    }
  }

  useEffect(() => {}, [selected])

  return (
    <div className={`image ${isSelected ? "selected" : ""}`} style={itemsCss()}>
      <img onClick={() => handleSelectionOnClick()} src={item.image_path} alt={item.name} />
    </div>
  )
}
