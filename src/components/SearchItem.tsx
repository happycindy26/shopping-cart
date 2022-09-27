import { Col } from 'react-bootstrap'
import StoreItem from './StoreItem';
import { useSearchBar } from '../contexts/SearchBarContext';

const Search = () => {
  const {searchText, filteredItems} = useSearchBar();
  return(
    <>
      {searchText && filteredItems.length>0 ? filteredItems.map(item => 
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>) : 
        <p style={{margin: "2rem auto"}}>Sorry, we couldn't find results for "{searchText}" </p>
      }
    </>
  )
}
export default Search