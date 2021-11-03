import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "../Slider/Slider";
import darkPhoto1 from "./../../images/darkPhoto1.jpg"

const Home = () => {
    return(
        <div>
            <Slider />
            <Container>
                <Row>
                    <Col md={7}>
                        <img src={darkPhoto1} height={400} />
                    </Col>
                    <Col md={5}>
                        <h2>Тут будет крутой ЗАГОЛОВОК</h2>
                   <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel mollitia corporis ipsum sit, amet consequuntur, 
                    uisquam, magnam reiciendis laudantium saepe doloribus voluptatum ullam rem eaque debitis ipsa voluptate ex?,
                     ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime, deleniti magnam exercitationem i
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel mollitia corporis ipsum sit, amet consequuntur, 
                    uisquam, magnam reiciendis laudantium saepe doloribus voluptatum ullam rem eaque debitis ipsa voluptate ex?,
                     ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime, deleniti magnam exercitationem i
                   </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;