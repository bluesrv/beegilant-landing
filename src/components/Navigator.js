import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

const Navigator = () => {
    return (
        <Navbar className="navbar-horizontal navbar-dark bg-beegilant" expand="lg" sticky="top">
            <Container>
                <NavbarBrand href="/#/">
                    <img alt="Beegilant"
                        src={
                            require('../assets/img/beegilant/beegilant.png')
                    }></img>
                </NavbarBrand>
                <button aria-controls="navbar-default"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-default"
                    data-toggle="collapse"
                    id="navbar-default"
                    type="button">
                    <span className="navbar-toggler-icon"/>
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-default">
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link to="/#/">
                                    <img alt="Beegilant"
                                        src={
                                            require('../assets/img/beegilant/beegilant.png')
                                        }/>
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button aria-controls="navbar-default"
                                    aria-expanded={false}
                                    aria-label="Toggle navigation"
                                    className="navbar-toggler"
                                    data-target="#navbar-default"
                                    data-toggle="collapse"
                                    id="navbar-default"
                                    type="button">
                                    <span/>
                                    <span/>
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                            <NavLink href="/#/">
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/product">
                                Nuestro Producto
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/motivation">
                                Nuestra Motivación
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/team">
                                Nuestro Equipo
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/meet">
                                Juntémonos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link-icon" href="https://www.facebook.com/Beegilant-100209891362754/" target="_blank">
                                <i className="fa fa-facebook-square"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link-icon" href="https://www.instagram.com/beegilant.kibo/?hl=es-la" target="_blank">
                                <i className="fa fa-instagram"/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    );
};

export default Navigator;
