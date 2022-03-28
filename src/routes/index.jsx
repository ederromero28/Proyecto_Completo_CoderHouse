import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react"
import Checkout from "../components/Checkout/Checkout"
import Cart from "../components/Cart/Cart"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../components/ItemsListContainer/ItemsListContainer"
import NavBar from "../components/navBar/navBar.jsx";
import { CarrrContext } from "../Context/CartContext"
import NotFound from "../components/NotFound/NotFound"
import Footer from "../components/Footer/Footer"
import Home from "../components/Home/Home"
import { pricDesOrNot } from "../../src/Helpers/Helpers"

const Rutas = () => {

    const { cartItm, priceShhop } = useContext(CarrrContext)

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* rutas y elementos a cargar del NavBar.jsx */}
                    <Route path="/" element={<Home />} />
                    <Route path="/categ/:category" element={<ItemListContainer greeting={""} />} />
                    <Route path="categ/:category/:idBrand" element={<ItemListContainer greeting={""} />} />
                    <Route path="/:category/item/:idBrand" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout prdctCartCheck={cartItm} totalShop={pricDesOrNot({ pric: priceShhop })} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>

    )
}
export default Rutas