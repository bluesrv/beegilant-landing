import React, { Fragment } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Hero from './Hero';
import Feature from './Feature';

const Product = () => {
    return (
        <Fragment>
            <Hero>
                <Container className="panel-container">
                    <Row>
                        <Col className="panel-image-center">
                            <div data-aos="fade-right" className="panel-image2"> 
                                <img alt=''
                                    src={
                                        require("../assets/img/beegilant/product.png")
                                    }
                                    className="panel-image2"/>
                            </div>
                        </Col>
                        <Col>
                            <h2 data-aos="fade-left" className='panel-title'>¿Qué es Beegilant?</h2>
                            <p data-aos="fade-left" className='panel-text'>Beegilant es un sistema que a través de cámaras de video instaladas en jardines infantiles, detectará en tiempo real situaciones de violencia infantil, utilizando redes neuronales. Al detectar algún caso de violencia, el sistema notificará automáticamente a un encargado, de esta forma no será necesario que alguien esté monitoreando constantemente las cámaras y además se podrá intervenir inmediatamente en la escena y con esto prevenir un maltrato peor logrando reducir posibles secuelas psicológicas en los niños. El sistema también guarda los vídeos y audios grabados durante un episodio de violencia, con el objetivo de que estos puedan usarse como evidencia.</p>
                            <p data-aos="fade-left" className='panel-text'>La forma de operar de beegilant se logra resumir en tres partes:</p>
                            <ul data-aos="fade-left" className='panel-text'>
                                <li>A través de la información entregada por cámaras, que son procesadas por una red neuronal, detecta posibles casos de violencia.</li>
                                <li>Al encontrar un posible caso de violencia informa a un encargado, el cual debe interceder de acuerdo a las políticas de la institución.</li>
                                <li>Luego de interceder, el acto de violencia es detenido, resguardando la salud fisica y mental de los niños.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Hero customPanel="last">
                <Container className="members-container">
                    <h2 data-aos="fade-left" className='panel-title text-center'>¿Qué ofrecemos?</h2>
                    <Row>
                        <Col md="6" lg="4" xs="12">
                            <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine">
                                <Feature title="Facilidad de Uso"
                                    card={
                                            <div class="feature-icon text-center"><i class="feature-icon-img fa fa-smile-o"></i></div>
                                    }
                                    text="Beegilant es automático e intuituvo, puede ser utilizado por todo tipo de usuario, que sólo necesita acceder con su cuenta para poder ver como se encuentra su hijo en cada momento."
                                    />
                            </div>
                        </Col>
                        <Col md="6" lg="4" xs="12">
                            <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine" style={{height: "90%"}}>
                                <Feature title="Multiplataforma"
                                    card={
                                            <div class="feature-icon text-center"><i class="feature-icon-img fa fa-laptop"></i></div>
                                    }
                                    text="Beegilant puede ser accedido a través de diversos dispositivos como computador, tablet y celular."
                                    />
                            </div>
                        </Col>
                        <Col md="6" lg="4" xs="12">
                            <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine" style={{height: "90%"}}>
                                <Feature title="Aprendizaje Automático"
                                    card={
                                            <div class="feature-icon text-center"><i class="feature-icon-img fa fa-cogs"></i></div>
                                    }
                                    text="Beegilant está creado con las nuevas tecnologías que dominan el mercado, usando inteligencia artificial que entrega una mejora constante."
                                    />
                            </div>
                        </Col>
                        <Col md="6" lg="4" xs="12">
                            <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine" style={{height: "90%"}}>
                                <Feature title="Seguridad"
                                    card={
                                            <div class="feature-icon text-center"><i class="feature-icon-img fa fa-shield"></i></div>
                                    }
                                    text="La información de su hijo se encuentra protegida y resguardada en caso de cualquier acto de violencia que suceda."
                                    />
                            </div>
                        </Col>
                        <Col md="6" lg="4" xs="12">
                            <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine" style={{height: "90%"}}>
                                <Feature title="Privacidad"
                                    card={
                                            <div class="feature-icon text-center"><i class="feature-icon-img fa fa-user-secret"></i></div>
                                    }
                                    text="La información de los niños será accedida sólo por usuarios restringidos que defina el cliente."
                                    />
                            </div>
                        </Col>
                        <Col md="6" lg="4" xs="12">
                            <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine" style={{height: "90%"}}>
                                <Feature title="Disponibilidad"
                                    card={
                                            <div class="feature-icon text-center"><i class="feature-icon-img fa fa-space-shuttle"></i></div>
                                    }
                                    text="Beegilant te permite saber como estarán sus hijos en cualquier lugar a tiempo real, vía streaming."
                                    />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Hero>
        </Fragment>
    );
};

export default Product;