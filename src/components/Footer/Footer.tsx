import React from "react";
import { Container } from "react-bootstrap";

type Props = {

}
const Footer: React.FC<Props> = () => {
    return(
        <Container fluid style={{backgroundColor:'#212529', color:'#fff'}}>
            <Container style={{display:'flex', justifyContent:'center', padding:'10px '}}>
                <p>My app for portfolio</p>
            </Container>
        </Container>
    )
}

export default Footer;