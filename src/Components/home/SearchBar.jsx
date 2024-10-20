import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSearchQueryStore } from '../../store/useWishlistStore'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const inputRef = useRef(null)

  const { setSearchQuery } = useSearchQueryStore(state => state)

  const handleSearch = () => {
    setSearchQuery(inputRef.current.value)
  }
  
  return (
    <div className="flex items-center min-w-[200px] border px-4 py-1 text-sm md:text-base rounded-full">
      <FaSearch className="text-gray-300"/>
      <input
        onChange={handleSearch}
        className="outline-none px-2 text-gray-700"
        ref={inputRef}
        type="text"
        placeholder="Search" />
    </div>
  )
}

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired
}

export default SearchBar