import FilterGenre from "./FilterGenre"
import SearchBar from "./SearchBar"

const Controls = () => {
  return (
    <div className="flex flex-col min-[612px]:flex-row justify-center mt-10 mb-20 gap-6 px-4">
      <SearchBar/>
      <FilterGenre/>
    </div>
  )
}

export default Controls