import { Button } from "react-bootstrap"

function Home() {
  return(
    <div className="vh-100"
      style={{backgroundImage: "url(imgs/full.jpg)"}}
    >
      <Button href="/store" variant="outline-primary" className="m-5 fs-2" style={{fontFamily: "Niconne", borderRadius: "5rem"}}>Shop now</Button>
    </div>
  )
}

export default Home