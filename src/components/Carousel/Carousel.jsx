import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const TheCarousel = () => {


    return (
        <section className='sectionCarouselHome'>
            <Carousel fade pause={false}>
                <Carousel.Item>
                    <Link to={`/categ/laptops`}><img
                        className="d-block w-100 imgsCarousel"
                        src="https://i.ibb.co/QH2c144/mejores-marcas-de-laptop-2020.jpg"
                        alt="Second slide"
                    />
                    </Link>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to={`/categ/celulares`}> <img
                        className="d-block w-100 imgsCarousel"
                        src="https://i.ibb.co/3FBJZTk/840-560.jpg"
                        alt="First slide"
                    />
                    </Link>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to={`/categ/televisores`}><img
                        className="d-block w-100 imgsCarousel"
                        src="https://i.ibb.co/ZfT0NTx/5-televisores-samsung-entre-800-y-1100-euros-01.jpg"
                        alt="Third slide"
                    /></Link>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default TheCarousel