import HomeCarousel from "../components/Carousel"
import { useSearchBar } from '../contexts/SearchBarContext'
import SearchItem from '../components/SearchItem'

function Home() {
  const {searchText, filteredItems} = useSearchBar();
  return(
    <>
    {searchText && filteredItems ? <SearchItem /> :
    <HomeCarousel />}
    </>
    // <div className="vh-100"
    //   style={{backgroundImage: "url(imgs/half.jpg)", backgroundPosition: "top" }}
    // >
    //   <NavLink to="/store">
    //     <Button variant="primary" className="m-5 fs-2" style={{fontFamily: "Niconne", borderRadius: "5rem"}}>Shop now</Button>
    //   </NavLink>
    // </div>
  )
}

export default Home