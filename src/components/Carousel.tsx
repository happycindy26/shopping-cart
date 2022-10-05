import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <img
          style={{maxHeight: "80vh", backgroundPosition: "bottom"}}
          className="d-block w-100"
          src="imgs/cherry-juice.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ top: "-5%", left: "-50%"}}>
          <NavLink to="/store">
            <Button variant="primary" className="m-5 fs-2" style={{fontFamily: "Niconne", borderRadius: "5rem"}}>Shop now</Button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
        style={{maxHeight: "80vh", backgroundPosition: "top"}}
          className="d-block w-100"
          src="imgs/lemonlime.jpg"
          alt="Second slide"
        />
        <Carousel.Caption style={{top: "-5%", left: "-50%"}}>
          <NavLink to="/store">
            <Button variant="primary" className="m-5 fs-2" style={{fontFamily: "Niconne", borderRadius: "5rem"}}>Shop now</Button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
         style={{maxHeight: "80vh", backgroundPosition: "bottom"}}
          className="d-block w-100"
          src="imgs/pinky.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{top: "-5%", right: "-50%"}}>
           <NavLink to="/store">
            <Button variant="primary" className="m-5 fs-2" style={{fontFamily: "Niconne", borderRadius: "5rem"}}>Shop now</Button>
          </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel