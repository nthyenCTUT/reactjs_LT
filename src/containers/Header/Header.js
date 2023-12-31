import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {
    Outlet, NavLink
} from "react-router-dom";
class Header extends React.Component {

    handleLogOut = () => {
        alert("Out")
        this.props.userLogout()
    }

    render() {
        if (!this.props.isLoggedIn)
            return <Navigate replace to="/login" />


        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/' className="nav-link">Hệ thống</NavLink>

                            <NavLink to='about' className="nav-link">About</NavLink>
                            <NavLink to='contacts/1' className="nav-link">About 1</NavLink>
                            <NavLink to='contacts/2' className="nav-link">About 2</NavLink>
                            <NavLink to='users' className="nav-link">List Users</NavLink>
                            <NavLink to='getAllUserAPI' className="nav-link">getAllUserAPI</NavLink>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to='' className="nav-link"> <span onClick={() => this.handleLogOut()}>Log out</span></NavLink>
                            {this.props.isLoggedIn && <NavLink to='' className="nav-link">Xin chào: {this.props.userInfo.username}</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        )

    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch({ type: 'LOGOUT_USER' })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)