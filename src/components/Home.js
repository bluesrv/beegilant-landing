import React, {Fragment} from 'react';
import Hero from './Hero';
import {Col, Row, Container, CardImg} from 'reactstrap';
import YouTube from 'react-youtube-embed';
import { FacebookProvider, Page } from 'react-facebook';
import NavigatorCard from './NavigatorCard';

const Home = () => {
    return (
        <Fragment>
            <Hero customPanel='main'>
                <Container className="panel-container">
                    <Row>
                        <h2 data-aos="fade-down-right" className='panel-title'>BEEGILANT OBSERVA CUANDO TÚ NO PUEDES</h2>
                        <span data-aos="fade-down-right" className='panel-text'>Beegilant es un sistema que utiliza cámaras de video que detectan situaciones de violencia en centros de cuidado infantil de manera automática, alertando de forma inmediata.</span>
                        <YouTube className='panel-player' id="UsgO6vE7gf0"/>
                    </Row>
                    <Row>
                        <img data-aos="fade-up-left" alt=''
                            src={
                                require("../assets/img/beegilant/front1.svg")
                            }
                            className="panel-image"/>
                    </Row>
                </Container>
            </Hero>
            <Hero customPanel='middle'>
                <Container className="panel-container">
                    <Col>
                        <div data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-sine">
                            <NavigatorCard title="Sobre Beegilant"
                                card={
                                    <CardImg
                                className="navcard-img rounded"
                                    src={
require("../assets/img/beegilant/about.png")}
                                alt=""/>
                                }
                                text="Beegilant es un sistema que, a través de cámaras de video instaladas en jardines infantiles, detectará en tiempo real situaciones de violencia infantil utilizando redes neuronales."
                                link="/product"/>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-left" data-aos-duration="300" data-aos-easing="ease-in-sine">
                            <NavigatorCard title="Nuestra Motivación"
                                card={
                                    <CardImg
                                className="navcard-img rounded"
                                    src={
require("../assets/img/beegilant/motivation.png")}
                                alt=""/>
                                }
                                text="En el último tiempo, los casos de maltrato a menores en establecimientos e instituciones de cuidado infantil han ido en aumento, esto hace que elegir un jardín infantil o sala cuna sea una ardua tarea para los padres, que no tienen forma de saber en quien confiar."
                                link="/motivation"/>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-left" data-aos-duration="0" data-aos-easing="ease-in-sine">
                            <NavigatorCard title="Nuestro Equipo"
                                card={
                                    <CardImg
                                className="navcard-img rounded"
                                    src={
require("../assets/img/beegilant/kibo.png")}
                                alt=""/>
                                }
                                text="Somos Kibosoft una pre-empresa de desarrollo de software compuesta por un equipo de estudiantes de quinto y sexto año de Ingeniería Civil Informática pertenecientes a la Universidad Técnica Federico Santa María."
                                link="/team"/>
                        </div>
                    </Col>
                </Container>
            </Hero>
            <Hero customPanel='last'>
                <Container className='panel-container'>
                    <Col className='panel-news'>
                        <h3 data-aos="fade-down-right" className='panel-title'>Noticias</h3>
                        <span data-aos="fade-down-right" className='panel-text'>Entérate sobre todas las novedades relacionadas con Beegilant siguiéndonos en nuestra página de Facebook.</span>
                    </Col>
                    <Col className='panel-news'>
                        <FacebookProvider appId="1146883955703516">
                            <Page href="https://www.facebook.com/Beegilant-100209891362754/" tabs="timeline"/>
                        </FacebookProvider>
                    </Col>
                </Container>
            </Hero>
        </Fragment>
    );
};

export default Home;
