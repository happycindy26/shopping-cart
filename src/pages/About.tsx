import { useSearchBar } from "../contexts/SearchBarContext"
import SearchItem from "../components/SearchItem"

function About() {
  const {searchText, filteredItems} = useSearchBar()

  return (
    <>
    {searchText && filteredItems ? <SearchItem /> :
      <h1 className="text-center mt-3" style={{fontFamily: "Niconne"}}>About</h1>}
    </>
  )
}

export default About