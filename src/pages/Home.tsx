import { NavLink } from "react-router-dom"
import { Button } from "react-bootstrap"

function Home() {
  return(
    <div className="vh-100"
      style={{backgroundImage: "url(imgs/half.jpg)", backgroundPosition: "top" }}
    >
      <NavLink to="/store">
        <Button variant="outline-primary" className="m-5 fs-2" style={{fontFamily: "Niconne", borderRadius: "5rem"}}>Shop now</Button>
      </NavLink>
    </div>
  )
}

export default Home