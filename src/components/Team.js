import React, { Fragment } from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';
import Member from './Member';
import Hero from './Hero';

const Team = () => {
    return (
        <Fragment>
            <Hero>
                <Container className="panel-container">
                    <Row>
                        <Col className="panel-image-center">
                            <div data-aos="fade-right" className="panel-image"> 
                                <img alt=''
                                    src={
                                        require("../assets/img/beegilant/kibo.png")
                                    }
                                    className="panel-image"/>
                            </div>
                        </Col>
                        <Col>
                            <h2 data-aos="fade-left" className='panel-title'>Nuestro Equipo</h2>
                            <p data-aos="fade-left" className='panel-text'>Somos Kibosoft una pre-empresa de desarrollo de software compuesta por un equipo de estudiantes de quinto y sexto año de Ingeniería Civil Informática pertenecientes a la Universidad Técnica Federico Santa María.</p>
                            <p data-aos="fade-left" className='panel-text'>Nuestro equipo consta con diferentes habilidades dentro del campo de la informática, lo cual nos permite lograr un desarrollo más completo.</p>
                            <p data-aos="fade-left" className='panel-text'>Tenemos un gran interés en mejorar la situación actual del país, específicamente la seguridad de los niños por eso nace Beegilant, para garantizar su integridad.</p>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <Hero customPanel="last member-hero">
                <Container>
                    <h2 data-aos="fade-down" className='panel-title text-center'>Integrantes</h2>
                        <Container className="panel-container">
                        <Col>
                            <div data-aos="fade-up" data-aos-duration="0" data-aos-easing="ease-in-sine">
                                <Member name="Jorge Contreras"
                                    img={
                                        <CardImg
                                className="member-img rounded"
                                    src={
require("../assets/img/beegilant/foto_jorge.jpg")}
                                alt=""/>
                                    }
                                    position="Back-end Developer"
                                    link="https://www.linkedin.com/in/jorge-ignacio-contreras-cabrera-33a869183/"
                                    />
                            </div>
                        </Col>
                        <Col>
                            <div data-aos="fade-up" data-aos-duration="0" data-aos-easing="ease-in-sine">
                            <Member name="Florencia Cuzmar"
                                    img={
                                        <CardImg
                                className="member-img rounded"
                                    src={
require("../assets/img/beegilant/foto_flo.jpg")}
                                alt=""/>
                                    }
                                    position="Back-end Developer"
                                    link="https://www.linkedin.com/in/florencia-cuzmar/"
                                    />
                            </div>
                        </Col>
                        <Col>
                            <div data-aos="fade-up" data-aos-duration="0" data-aos-easing="ease-in-sine">
                            <Member name="Monserrat Figueroa"
                                    img={
                                        <CardImg
                                className="member-img rounded"
                                    src={
require("../assets/img/beegilant/foto-monse.png")}
                                alt=""/>
                                    }
                                    position="Front-end Developer"
                                    link="https://www.linkedin.com/in/monserrat-figueroa-lagos-88b609182/"
                                    />
                            </div>
                        </Col>
                        <Col>
                            <div data-aos="fade-up" data-aos-duration="0" data-aos-easing="ease-in-sine">
                            <Member name="Cesar Quiroz"
                                    img={
                                        <CardImg
                                className="member-img rounded"
                                    src={
require("../assets/img/beegilant/foto_cesar.jpg")}
                                alt=""/>
                                    }
                                    position="Jefe de Proyecto"
                                    link="https://www.linkedin.com/in/c%C3%A9sar-quiroz-5ba31a182/"
                                    />
                            </div>
                        </Col>
                        <Col>
                            <div data-aos="fade-up" data-aos-duration="0" data-aos-easing="ease-in-sine">
                            <Member name="Sebastián Ramírez"
                                    img={
                                        <CardImg
                                className="member-img rounded"
                                    src={
require("../assets/img/beegilant/foto_seba.jpg")}
                                alt=""/>
                                    }
                                    position="Back-end Developer"
                                    link="https://www.linkedin.com/in/seigravi/"
                                    />
                            </div>
                        </Col>    
                    </Container>
                </Container>
            </Hero>
        </Fragment>
    )
};

export default Team;