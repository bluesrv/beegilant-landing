import React from "react";
// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row className=" row-grid align-items-top mb-5">
                        <Col lg="4">
                            <img alt="KiboSoft"
                                src={
                                    require("../assets/img/beegilant/kibo.png")
                                }/>
                        </Col>
                        <Col lg="4">
                            <span>
                                <h4>
                                    Navegacion
                                </h4>
                            </span>
                            <Nav className="flex-column">
                                <NavItem>
                                    <NavLink href="#pablo"
                                        onClick={
                                            e => e.preventDefault()
                                    }>
                                        Inicio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#pablo"
                                        onClick={
                                            e => e.preventDefault()
                                    }>
                                        Sobre Beegilant
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#pablo"
                                        onClick={
                                            e => e.preventDefault()
                                    }>
                                        Nuestra Motivación
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#pablo"
                                        onClick={
                                            e => e.preventDefault()
                                    }>
                                        Nuestro Equipo
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#pablo"
                                        onClick={
                                            e => e.preventDefault()
                                    }>
                                        Contacto
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col className=" btn-wrapper align-items-center" lg="4">
                            <Container>
                                <Row>
                                    <span>
                                        <h4>
                                            Contacto
                                        </h4>
                                    </span>
                                </Row>
                                <Row>
                                    <Button className="btn-icon-only btn-2" color="facebook" href="https://www.facebook.com/Beegilant-100209891362754/" id="tooltip837440414" target="_blank">
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-facebook-square"/>
                                        </span>
                                    </Button>
                                    <UncontrolledTooltip delay={0}
                                        target="tooltip837440414">
                                        Danos Like
                                    </UncontrolledTooltip>
                                    <Button className="btn-icon-only btn-2" color="instagram" href="https://www.instagram.com/beegilant.kibo/?hl=es-la" id="tooltip69420" target="_blank">
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-instagram"/>
                                        </span>
                                    </Button>
                                    <UncontrolledTooltip delay={0}
                                        target="tooltip69420">
                                        Síguenos
                                    </UncontrolledTooltip>
                                    <Button className="btn-icon-only btn-2" color="github" href="mailto: beegilant.kibo@gmail.com" id="tooltip495507257" target="_blank">
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-envelope"/>
                                        </span>
                                    </Button>
                                    <UncontrolledTooltip delay={0}
                                        target="tooltip495507257">
                                        Contáctanos
                                    </UncontrolledTooltip>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className=" align-items-center justify-content-md-between">
                        <Col md="6">
                            <div className=" copyright">
                                © {
                                new Date().getFullYear()
                            }
                                {" "}
                                <a href="https://www.creative-tim.com?ref=adsr-footer" target="_blank">
                                    Kibosoft
                                </a>
                                .
                            </div>
                        </Col>
                        <Col md="6">
                            <Nav className=" nav-footer justify-content-end align-items-center">
                                Con el apoyo de:
                                <NavItem>
                                    <NavLink href="https://feriadesoftware.cl/" target="_blank">
                                        Feria de Software
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://www.inf.utfsm.cl/" target="_blank">
                                        Departamento de Informática
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
