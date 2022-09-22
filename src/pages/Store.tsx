import {Col, Row} from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

function Store() {
  return(
    <>
      <h1 className='text-center mt-3' style={{fontFamily: "Niconne"}}>Freshest and Healthiest </h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
  
}

export default Store