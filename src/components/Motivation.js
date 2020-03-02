import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hero from './Hero';

const Motivation = () => {
    return (
        <Fragment>
            <Hero>
                <Container className="panel-container">
                    <Row>
                        <Col className="panel-image-center">
                            <div data-aos="fade-right" className="panel-image2"> 
                                <img alt=''
                                    src={
                                        require("../assets/img/beegilant/motivation.png")
                                    }
                                    className="panel-image2"/>
                            </div>
                        </Col>
                        <Col>
                            <h2 data-aos="fade-left" className='panel-title'>Nuestra Motivación</h2>
                            <p data-aos="fade-left" className='panel-text'>En el último tiempo, los casos de maltrato a menores en establecimientos e instituciones de cuidado infantil han ido en aumento, esto hace que elegir un jardín infantil o sala cuna sea una ardua tarea para los padres, que no tienen forma de saber en quien confiar. Además, en la mayoría de los casos, la detección se hace tardíamente, cuando los niños presentan golpes o trastornos en su comportamiento.</p>
                            <p data-aos="fade-left" className='panel-text'>Por consecuencia, los niños menores de 6 años de nuestro país sufren la peor salud mental del mundo, los niveles de ansiedad y depresión van en alza y no se han creado políticas públicas adecuadas para combatirlo. Es por esto que decidimos crear Beegilant, para que el maltrato y abuso infantil sea un problema del pasado, y podamos tener niños alegres, seguros y felices.</p>
                        </Col>
                    </Row>
                </Container>
            </Hero>
        </Fragment>
    )
};

export default Motivation;