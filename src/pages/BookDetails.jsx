import { useParams } from "react-router-dom"
import useBookDetails from "../hooks/useBookDetails"
import { LuHash } from "react-icons/lu"
import { RxHeartFilled, RxPencil1 } from "react-icons/rx"
import { useWishlistStore } from "../store/useBookStore"
import DetailsBookSkeleton from "../Components/details/DetailsBookSkeleton"

const BookDetails = () => {
  const { id } = useParams()
  const { book, loading } = useBookDetails(id)
  const firstAuthor = book?.authors[0]?.name.split(",")[0] || "Unknown"
  const wishlist = useWishlistStore(state => state.wishlist)
  const toggleWishlist = useWishlistStore(state => state.toggleBook)

  return (
    <div>
      {loading  
      ? <DetailsBookSkeleton />
      : <section className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row px-4 gap-y-10 justify-between">
          <div className="text-gray-700">
            <div>
              <h1 className=" text-3xl">{book.title}</h1>

              <div className="flex gap-x-4 text-2xl pt-2">
                <div className="flex gap-1 text-sm items-center justify-center">
                  <LuHash />
                  <p>{book.id}</p>
                </div>
                <div className="flex text-sm items-center justify-center gap-1">
                  <RxPencil1 />
                  <p>{firstAuthor}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p>
                <span className="font-medium">Authors:</span>
                <span className="ml-[95px]">
                {
                  book?.authors.map(author => (
                    <span key={author.name}>{`${author.name} (${author.birth_year} - ${author.death_year})`}</span>
                  ))
                }
                </span>
              </p>
              <p>
                <span className="font-medium">Language:</span>
                <span className="ml-20">{book.languages}</span>
              </p>
              <p>
                <span className="font-medium">Download:</span>
                <span className="ml-20">{book.download_count}</span>
              </p>

              <div className="flex flex-col md:flex-row">
                <p className="font-medium">Subjects:</p>
                <span className="pl-[90px] py-1">
                  {
                    book?.subjects.map((subject, i) => (
                      <span key={subject}>{`${i+1}. ${subject}`} <br /></span>
                    ))
                  }
                </span>
              </div>
            </div>
          </div>

          <div className="relative md:mt-[125px] mx-10 md:px-0 rounded-md h-fit border border-gray-700">
            <RxHeartFilled
              onClick={()=> toggleWishlist(book)}
              className={
                `${(wishlist[book.id] ? true : false) ? "text-red-500" : "text-gray-300 "}
                text-[38px] cursor-pointer -top-4 right-1 absolute`
              }
            /> 
            <img className="rounded-md w-full h-full" src={book.formats["image/jpeg"]} alt={book.title} />
          </div>
        </section>
      }
    </div>
  )
}

export default BookDetails