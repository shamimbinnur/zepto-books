import PropTypes from "prop-types"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { useBooksDataStore, usePageStore } from "../store/useWishlistStore"

const Pagination = () => {
  const { booksData } = useBooksDataStore(state => state)
  const { page, setPage } = usePageStore(state => state)

  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex items-center gap-x-4">
        <div className={`${booksData?.previous ? "opacity-100" : "opacity-20 "}`}>
          <button disabled={!booksData?.previous} onClick={()=> setPage(page-1)} className="flex items-center">
            <RxCaretLeft className="text-gray-700"/>
            <span className="text-gray-700">Previous</span>
          </button>
        </div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className={`${booksData?.next ? " opacity-100" : " opacity-20 "}`}>
          <button disabled={!booksData?.next} onClick={()=> setPage(page + 1)} className="flex items-center"> 
            <span className="text-gray-700">Next</span>
            <RxCaretRight className="text-gray-700"/>
          </button>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  nextPage: PropTypes.string,
  previousPage: PropTypes.string
}

export default Pagination