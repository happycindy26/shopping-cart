import { Row, Col } from 'react-bootstrap'
import { fruits } from '../data/fruits'
import StoreItem from '../components/StoreItem'

const Fruits = () => {
  return(
    <>
      <h5 className='text-center mt-5'>Fruits:</h5>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
          { fruits.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>))
          }
        </Row>
    </>
  )
}

export default Fruits