import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import DataContext from "../context/DataContext"

const Browser = () => {
  const { shopCart, formatNumber  } = useContext(DataContext)

  const setActiveClass = ({ isActive }) =>
   (isActive ?
    "text-info fw-bold text-decoration-none me-3" :
    "text-secondary text-decoration-none me-3")

  const calculateTotal = () => {
    return shopCart.reduce((total, { count, price }) => total + price * count, 0)
  }

  return (
    <Navbar expand="md" bg="dark">
      <Container>
        <Navbar.Brand className="navbar-icon fw-bold text-white text-decoration-none text-uppercase">
          🛋 Creaciones P&J.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={setActiveClass}>
              Home
            </NavLink>
            <NavLink to="/Contacto" className={setActiveClass}>
              Contacto
            </NavLink>
            <NavLink to="/Cart" className={setActiveClass}>
              <h4>
                🛒 $ {formatNumber(calculateTotal())}
              </h4>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Browser
