import {Button, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart()
  return(
  <NavbarBs sticky="top"  className='bg-light'>
    <Nav className='me-auto m-3'>
      <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
      <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
      <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
    </Nav>
    <Button 
      onClick={openCart}
      style={{width:"3rem", height:"3rem", position:"relative", marginRight:"2rem" }} 
      variant="outline-primary" 
      className='rounded-circle mr-10'
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
      {cartQuantity > 0 && 
        (<div className="rounded-circle bg-success d-flex justify-content-center align-items-center" style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom: 0, right: 0, transform: "translate(-125%, 5%)" }}>
        {cartQuantity}
      </div>)}
    </Button>
  </NavbarBs>
  )
}

export default Navbar