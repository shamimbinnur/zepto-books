import { useWishlistStore } from '../../store/useBookStore'
import Book from '../home/Book'

const Books = () => {
  const wishlistedBooks = useWishlistStore(state => state.wishlist)
  const toggleWishlist = useWishlistStore(state => state.toggleBook)
  const keys = Object.keys(wishlistedBooks)

  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center xl:justify-start gap-x-5 gap-y-8 px-4">
        {keys.map(key => {
          return (
            <Book
              key={key}
              bookData={wishlistedBooks[key]}
              wishlist={true}
              toggleWishlist={toggleWishlist}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Books