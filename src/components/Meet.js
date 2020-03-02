import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hero from './Hero';

const Meet = () => {
    return (
        <Fragment>
            <Hero>
                <Container className="panel-container">
                    <Row>
                        <Col className="panel-image-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53516.89732500346!2d-71.596779!3d-33.035239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4edb558ea6e3929!2sUniversidad%20T%C3%A9cnica%20Federico%20Santa%20Mar%C3%ADa!5e0!3m2!1ses!2scl!4v1583125394933!5m2!1ses!2scl" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                        </Col>
                        <Col>
                            <h2 data-aos="fade-left" className='panel-title'>Encuéntranos en la Feria de Software</h2>
                            <p data-aos="fade-left" className='panel-text'>Beegilant será uno de los proyectos que se presentarán en la siguiente Feria de Software a realizar el <strong>19 de Marzo del 2020</strong> en la Universidad Tecnica Federico Santa María</p>
                        </Col>
                    </Row>
                </Container>
            </Hero>
        </Fragment>
    )
};

export default Meet;