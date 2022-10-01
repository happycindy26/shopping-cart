import { Col, Row } from 'react-bootstrap'
import StoreItem from './StoreItem';
import { useSearchBar } from '../contexts/SearchBarContext';

const Search = () => {
  const {searchText, filteredItems} = useSearchBar();
  return(
    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
      {searchText && filteredItems.length>0 ? filteredItems.map(item => 
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
        ) : 
        <p style={{margin: "2rem auto"}}>Sorry, we couldn't find results for "{searchText}" </p>
      }
    </Row>
  )
}
export default Search