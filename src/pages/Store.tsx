import { Container } from 'react-bootstrap'
import { useSearchBar } from '../contexts/SearchBarContext';
import SearchItem from '../components/SearchItem';
import Juice from './Juice';
import Fruit from './Fruit';

function Store() {
  const {searchText, filteredItems} = useSearchBar();
  return(
    <>
      <h1 className='text-center mt-3' style={{fontFamily: "Niconne"}}>Freshest and Healthiest</h1>
      {searchText && filteredItems ? <SearchItem /> :
      <Container>
        <Fruit />
        <Juice />
      </Container> }
    </>
  )
}

export default Store