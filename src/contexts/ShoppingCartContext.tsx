import React, {createContext, useContext, useState, ReactNode } from 'react'
import {ShoppingCart} from '../components/ShoppingCart'

type ShoppingCartProviderProps = {
  children: ReactNode
}
type ShoppingCartContextProps = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}
type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  const increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(currItem => currItem.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(currItem => {
          if (currItem.id === id) {
            return {...currItem, quantity: currItem.quantity + 1}
          } else {
            return currItem
          }
        })
      }
    })
  }
  const decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(currItem => currItem.id === id)?.quantity === 1) {
        return cartItems.filter(currItem => currItem.id !== id)
      } else {
        return currItems.map(currItem => {
          if (currItem.id === id) {
            return {...currItem, quantity: currItem.quantity - 1}
          } else {
            return currItem
          }
        })
      }
    })
  }
  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(currItem => currItem.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider 
      value={{
        openCart,
        closeCart,
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart,
        cartQuantity,
        cartItems
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}