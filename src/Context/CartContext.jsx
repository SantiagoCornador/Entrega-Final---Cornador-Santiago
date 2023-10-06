import { createContext, useContext, useState } from "react";

const CartContext = createContext ([]);

export const useCartContext = () => useContext (CartContext)

export const CartContextProvider = ({children}) => {
        const [cartList, setCartlist] = useState ([])
        const addProduct = (newProduct)=> {
            const idx = cartList.findIndex(product => product.id === newProduct.id)

            if(idx != -1){

                cartList[idx].quantity = cartList[idx].quantity + newProduct.quantity
                setCartlist ([...cartList])
            } else {

                setCartlist([
                    ...cartList,
                    newProduct 
                ] )     
            }
        }

        const cantidadTotal = () => cartList.reduce ((count, objProducto) =>  count += objProducto.quantity, 0 )
        const precioTotal = () => cartList.reduce ((count, objProducto) =>  count += (objProducto.quantity * objProducto.price), 0 )
        const eliminarItem = id => setCartlist ( cartList.filter(product => product.id != id))
        const deleteCart  =() => {
            setCartlist([])
        }

        return (
            <CartContext.Provider value={{
                cartList, 
                addProduct,
                deleteCart,
                cantidadTotal,
                precioTotal,
                eliminarItem
            }}>
                {children}
            </CartContext.Provider>
    )
}
