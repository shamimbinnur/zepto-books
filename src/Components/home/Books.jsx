import PropTypes from "prop-types"
import { useTargetFilterStore, useWishlistStore } from "../../store/useWishlistStore"
import Book from "./Book"
import Pagination from "../Pagination"
import { useEffect, useState } from "react"

const Books = ({ booksData }) => {
  const [books, setBooks] = useState([])

  const wishlist = useWishlistStore(state => state.wishlist)
  const toggleWishlist = useWishlistStore(state => state.toggleBook)
  const targetFilter = useTargetFilterStore(state => state.targetFilter)
  
  useEffect(() => {
    filter(targetFilter)
  }, [targetFilter])
  
  useEffect(() => {
    setBooks(booksData.results)
  }, [booksData])
  
  const filter = (targetFilter) => {
    if (targetFilter == "None") {
      setBooks(booksData.results)
      return
    }
    const filtered = books.filter(book => {
      return book.genres[targetFilter]
    })
    setBooks(filtered)
  }


  return (
    <div className="flex flex-col w-full">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center xl:justify-start gap-x-5 gap-y-8 px-4">
        {books &&
        books.map(bookData => {
          const isWishlisted = wishlist[bookData.id] ? true : false
          return (
            <Book
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
              key={bookData.id}
              bookData={bookData}
            />)
        })}
      </div>

      <Pagination/>
    </div>
  )
}

Books.propTypes = {
  booksData: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
        })).isRequired,
        formats: PropTypes.shape({
          "image/jpeg": PropTypes.string,
        }).isRequired,
      })
    ),
  }),
};

export default Books