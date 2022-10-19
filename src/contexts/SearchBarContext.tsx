import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import StoreItems from '../data/items.json'

type SearchBarProviderProps = {
    children: ReactNode
}
type SearchBarContextProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  searchText: string
  filteredItems: StoreItem[]
}
type StoreItem = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const searchBarContext = createContext({} as SearchBarContextProps)

export const useSearchBar = () => {
   return useContext(searchBarContext)
}

export const SearchBarProvider = ({children}: SearchBarProviderProps) => {
  const [searchText, setSearchText] = useState('')
  const [filteredItems, setFilteredItems] = useState<StoreItem[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLocaleLowerCase())
  }
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // }
  useEffect(() => {
    const newFilteredItem = StoreItems.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchText)})
      setFilteredItems(newFilteredItem)
  }, [searchText])

  return(
    <searchBarContext.Provider value={{searchText, handleChange, filteredItems}}>
      {children}
    </searchBarContext.Provider>
  )
}

