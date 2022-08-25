import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#'>Carventory</Navbar.Brand> 
        <Nav className='ms-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/cars'>Cars</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
