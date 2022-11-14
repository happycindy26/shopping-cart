import { InputGroup, Form, Button, Nav, NavDropdown, Navbar as NavbarBs } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import { useSearchBar } from '../contexts/SearchBarContext'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart()
  const {searchText, handleChange} = useSearchBar()
  return(  
  <NavbarBs collapseOnSelect expand="md" sticky="top"  style={{backgroundColor: "lightBlue"}} className='bg-light'>
    <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
    <NavbarBs.Collapse id="responsive-navbar-nav">
    <Nav className='me-auto m-3'>
      <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
      <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
      <NavDropdown title="Store" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/store">All products</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/store/fruit">Fruit</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/store/juice">Juice</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Form className="d-flex" style={{marginRight: "2rem"}}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchText}
        onChange={handleChange}
      />
      <Button variant="outline-success" size='sm'></Button>
    </Form> */}
    <Form className="d-flex" style={{margin: "0 1rem"}}>
      <InputGroup className="d-flex" >
        <Form.Control style={{outline: "none", boxShadow: "none", border: "1px solid #212529"}} size="sm" type="search" placeholder='Search' 
          value={searchText}
          onChange={handleChange}
        />
        <Button variant="outline-dark" size='sm' >
          <FontAwesomeIcon  icon={faMagnifyingGlass}/>
        </Button>
      </InputGroup>
    </Form>
    </NavbarBs.Collapse>

    <Nav.Link to='/user' as={NavLink}>
      <Button variant="outline-dark rounded-circle" style={{border: "none", marginLeft: "1rem"}}>
        <FontAwesomeIcon icon={faUser} size="xl" />
      </Button>
    </Nav.Link>
    <Button 
      onClick={openCart}
      style={{position: "relative", margin:"1rem", border: "none"}}
      variant="outline-dark" 
      className='rounded-circle'
    >
      <FontAwesomeIcon icon={faCartShopping} size="xl"/>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg> */}
      {cartQuantity > 0 && (
        <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center" style={{color:"white", width:"1.2rem", height:"1.2rem", position:"absolute", bottom: 0, right: 0, transform: "translate(-25%, -100%)" }}>
         {cartQuantity}
        </div>
      )}
    </Button>
  </NavbarBs>
  )
}

export default Navbar