import React from 'react'
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import CartNavbar from './CartNavbar'


export default (props) => {

    return (

        <Navbar color="faded" light toggleable>
          <NavbarBrand href="/">DR.B Mac Repair</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products and Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <CartNavbar/>
              </NavItem>
            </Nav>
        </Navbar>
    )
}
