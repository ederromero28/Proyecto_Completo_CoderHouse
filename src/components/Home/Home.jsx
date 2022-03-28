import React from 'react'
import TheCarousel from '../Carousel/Carousel'
import CategorysDestac from '../CategorysDestac/CategorysDestac'
import Banners from '../Banners/Banners'
import { scrollArriba } from '../../Helpers/Helpers'

const Home = () => {
    scrollArriba()

    return (
        <>
            <TheCarousel />
            <CategorysDestac greet={"Categorias destacadas"}/>
            <Banners lengt={4} greet={"Especial de ofertas"}/>
        </>

    )
}

export default Home