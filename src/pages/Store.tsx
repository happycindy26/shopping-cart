import { Container } from 'react-bootstrap'
import { useSearchBar } from '../contexts/SearchBarContext';
import SearchItem from '../components/SearchItem';
import Juices from './Juices';
import Fruits from './Fruits';

function Store() {
  const {searchText, filteredItems} = useSearchBar();
  return(
    <>
      <h1 className='text-center mt-3' style={{fontFamily: "Niconne"}}>Freshest and Healthiest </h1>
      {searchText && filteredItems ? <SearchItem /> :
      <Container>
        <Fruits />
        <Juices />
      </Container> }
    </>
  )
}

export default Store