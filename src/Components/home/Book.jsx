import PropTypes from "prop-types"
import { shortenString } from "../../utils/utils"
import { RxHeartFilled, RxPencil1 } from "react-icons/rx";
import { LuHash } from "react-icons/lu";
import { IoIosRemoveCircle } from "react-icons/io";
import { useWishlistStore } from "../../store/useBookStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = ({
  bookData
}) => {
    const [liked, setLiked] = useState(false)

   const firstAuthor = bookData?.authors[0]?.name.split(",")[0] || "Unknown"
   const isHomePage = window.location.pathname === "/"

   const { wishlist, toggleBook } = useWishlistStore()

   const navigate = useNavigate()

   useEffect(() => {
      if (wishlist && wishlist[bookData?.id]) {
        setLiked(true)
      } else
        setLiked(false)
    }, [wishlist])

  return (
    <div className="w-[180px] relative flex flex-col justify-center h-[270px] font-poppins border shadow-md border-[#9F9F9F] rounded-l-[6px] rounded-r-[16px] p-4">
      <div onClick={()=> toggleBook(bookData)} className="absolute -top-3 right-1">
      {isHomePage ?
        <RxHeartFilled
          className={
            `${liked ? "text-red-500" : "text-gray-300 "}
            text-[30px] cursor-pointer`
          }
        />  :
        <IoIosRemoveCircle
          className="text-red-500 text-[30px] cursor-pointer"
        />
      }
      </div>
      <a onClick={ ()=> navigate(`/book/${bookData?.id}`)}>
        <h1 className="text-sm font-medium h-[38px] cursor-pointer leading-snug tracking-tighter text-gray-600"> 
          {shortenString(bookData?.title, 36)}
        </h1>
      </a>
      <div className="w-full h-[173px] overflow-hidden mt-2 border rounded ">
        <img className="w-full h-full" src={bookData?.formats["image/jpeg"]} alt={`${bookData.title} by ${firstAuthor}`} />
      </div>
      <div className="flex gap-x-2 content-center text-xs pt-2 font-medium text-gray-600">
        <div className="flex gap-0.5 justify-center items-center">
          <LuHash />
          <p>{bookData?.id}</p>
        </div>

        <div className="flex gap-0.5 justify-center items-center">
          <RxPencil1 />
          <p>{firstAuthor}</p>
        </div>
      </div>
    </div>
  )
}

Book.propTypes = {
  isWishlisted: PropTypes.bool,
  toggleWishlist: PropTypes.func,
  bookData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    authors: PropTypes.string,
    genre: PropTypes.string,
    formats: PropTypes.shape({
      "image/jpeg": PropTypes.string
    }).isRequired,
    download_count: PropTypes.number
  }).isRequired
}

export default Book