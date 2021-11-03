import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import darkPhoto1 from "./../../images/darkPhoto1.jpg"
import darkPhoto2 from "./../../images/darkPhoto2.jpg"
import darkPhoto3 from "./../../images/darkPhoto3.jpg"


const Slider = () => {
    return(
        <Carousel>
            <CarouselItem style={{"height":"600px"}}>
                <img 
                className="d-block w-100"
                src={darkPhoto1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Крутой заголовок</h3>
                    <p>i napiwu Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquam incidunt officia eveniet itaque dignissimos, ex sunt molestiae neque unde, adipisci qui iure! 
                        Dolore velit odit ducimus fuga voluptates asperiores facere.
                    </p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{"height":"600px"}}>
                <img 
                className="d-block w-100"
                src={darkPhoto2}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Супер крутой заголовок</h3>
                    <p>i napiwu Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquam incidunt officia eveniet itaque dignissimos, ex sunt molestiae neque unde, adipisci qui iure! 
                        Dolore velit odit ducimus fuga voluptates asperiores facere.
                    </p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{"height":"600px"}}>
                <img 
                className="d-block w-100"
                src={darkPhoto3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Мега крутой заголовок</h3>
                    <p>i napiwu Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquam incidunt officia eveniet itaque dignissimos, ex sunt molestiae neque unde, adipisci qui iure! 
                        Dolore velit odit ducimus fuga voluptates asperiores facere.
                    </p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    )
}

export default Slider;