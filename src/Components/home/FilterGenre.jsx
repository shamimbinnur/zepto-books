import { IoFilterSharp } from 'react-icons/io5'
import { useTargetFilterStore } from '../../store/useWishlistStore'

const FilterGenre = () => {
  const setTargetFilter = useTargetFilterStore(state => state.setTargetFilter)
  const targetFilter = useTargetFilterStore(state => state.targetFilter)
  const genreOptions = ["None", "Literature", "Fiction"]
  
  return (
    <div className="flex text-sm md:text-base items-center gap-x-1 border py-1 rounded-md px-3">
      <IoFilterSharp className="text-gray-600" />
      <select
        id="genre-dropdown"
        value={targetFilter}
        onChange={(e) => setTargetFilter(e.target.value)}
        className="outline-none text-gray-700 pl-2 w-full"
        >
        {genreOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterGenre