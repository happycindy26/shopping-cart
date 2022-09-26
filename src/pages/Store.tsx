import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'
import { useSearchBar } from '../contexts/SearchBarContext';

function Store() {
  const {searchText, filteredItems} = useSearchBar();
  return(
    <>
      <h1 className='text-center mt-3' style={{fontFamily: "Niconne"}}>Freshest and Healthiest </h1>
      { filteredItems.length <= 0 && 
        <p className='text-center mt-5'>Sorry, we couldn't find results for "{searchText}" </p>}
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        { filteredItems? filteredItems.map(item => 
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>) : 
          storeItems.map(item => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
        ))}
      </Row>
    </>
  )
}

export default Store