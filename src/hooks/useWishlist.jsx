import { useState } from "react"

const useWishlist = () => {
  const [wishlist, setWishlist] = useState( new Map())

  const addBookToWishlist = (book) => {
    if (!wishlist.has(book.id)) {
      const newWishList = new Map(wishlist).set(book.id, book)
      setWishlist(newWishList)
      localStorage.setItem("wishlist", JSON.stringify(newWishList))
    }
  }

  const removeBookFromWishlist = (bookId) => {
    if (wishlist.has(bookId)) {
      const newWishlist = new Map(wishlist).delete(bookId)
      setWishlist(newWishlist)
      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
    }
  }

  const toggleWishlist = (book) => {
    if (wishlist.has(book.id)) {
      removeBookFromWishlist(book.id)
    } else {
      addBookToWishlist(book)
    }
  };

  const clearWishlist = () => {
    setWishlist(new Map());
    localStorage.removeItem("wishlist")
  };

  return {
    wishlist,
    addBookToWishlist,
    removeBookFromWishlist,
    clearWishlist,
    toggleWishlist
  };
};

export default useWishlist