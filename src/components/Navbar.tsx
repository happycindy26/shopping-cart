import { Form, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useSearchBar } from '../contexts/SearchBarContext'
import { useShoppingCart } from '../contexts/ShoppingCartContext'


function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart()
  const {searchText, handleChange} = useSearchBar()
  return(  
  <NavbarBs collapseOnSelect expand="md" sticky="top"  className='bg-light'>
    <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
    <NavbarBs.Collapse id="responsive-navbar-nav">
    <Nav className='me-auto m-3'>
      <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
      <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
      <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
    </Nav>
    <Form className="d-flex m-2">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchText}
        onChange={handleChange}
      />
      {/* <Button variant="outline-success" size='sm'>Search</Button> */}
    </Form>
    {/* <InputGroup className="d-flex" style={{margin: "0 5rem"}}>
      <Form.Control className="me-2" style={{ position: "relative"}} size="sm" type="search" value="search" />
      <FontAwesomeIcon style={{position: "absolute", top: ".5rem", right: "1rem" }} icon={faMagnifyingGlass}/>
    </InputGroup> */}
    </NavbarBs.Collapse>
    <Button 
      onClick={openCart}
      style={{width:"3rem", height:"3rem", position:"relative", margin:"1rem" }} 
      variant="outline-primary" 
      className='rounded-circle'
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
      {cartQuantity > 0 && (
        <div className="rounded-circle bg-success d-flex justify-content-center align-items-center" style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom: 0, right: 0, transform: "translate(-125%, 5%)" }}>
         {cartQuantity}
        </div>
      )}
    </Button>
  </NavbarBs>
  )
}

export default Navbar