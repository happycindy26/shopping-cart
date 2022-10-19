import { Row, Col } from 'react-bootstrap'
import StoreItems from '../data/items.json'
import StoreItem from '../components/StoreItem'
import { useSearchBar } from '../contexts/SearchBarContext'
import SearchItem from '../components/SearchItem'

const Juice = () => {
  const {searchText, filteredItems} = useSearchBar()
  const juices = StoreItems.filter(item => item.category === 'juice')
  return(
    <>
      {searchText && filteredItems ? <SearchItem /> :
        <>
        <h5 className='text-center mt-5'>Juice</h5>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
          { juices.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>))
          }
        </Row>
        </>
      }
    </>
  )
}

export default Juice