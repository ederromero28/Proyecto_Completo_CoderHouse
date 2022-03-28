import { createContext, useState } from "react"

export const CarrrContext = createContext({})

const CartContext = ({ children }) => {

    const [cartItm, setCartItm] = useState([])
    const addCart = (item, quanty, priceTotal) => {
        let cantItem = { ...item, quanty, priceTotal }
        setCartItm([...cartItm, cantItem])
    }
    const removeItem = (itemId) => {
        let itemElimin = cartItm.filter((elemento) => elemento.id !== itemId)
        setCartItm(itemElimin)
    }
    const clear = () => {
        setCartItm([])
    }
    const isInCart = (itmId) => {
        return cartItm.some((elem) => elem.id === itmId)
    }
    let priceShhop = cartItm.map((ttl) => ttl.priceTotal).reduce((accumulator, curr) => accumulator + curr, 0);

    const changQtyAument = (id) => {
        setCartItm(cartItm.map((add) => {
            if (add.id === id) {
                add.quanty = add.quanty + 1
                add.priceTotal = add.quanty * add.price
            }
            return add
        }))
    }
    const changQtyDismin = (id) => {
        setCartItm(cartItm.map((dism) => {
            if (dism.id === id) {
                dism.quanty = dism.quanty - 1
                dism.priceTotal = dism.quanty * dism.price
            }
            return dism
        }))
    }

    return (
        <>
            <CarrrContext.Provider value={{ cartItm, addCart, removeItem, isInCart, clear, changQtyAument, changQtyDismin, priceShhop }}>
                {children}
            </CarrrContext.Provider>
        </>

    )
}
export default CartContext;