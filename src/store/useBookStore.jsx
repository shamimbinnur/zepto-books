import { create } from 'zustand'

const useBooksDataStore = create((set) => ({
  booksData: {},
  setBooksData: (data) => set({ booksData: data }),
}))

const useWishlistStore = create( (set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")),

  addBook: (book) => {
    console.log("Adding to wishlist")
    set(state => {
      const newWishlist = { ...state.wishlist }
      newWishlist[book.id] = book
      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
      return { wishlist: newWishlist }
    })
  },
  removeBook: (book) => {
    console.log("Removing from wishlist")
    set(state => {
      const newWishlist = { ...state.wishlist }
      delete newWishlist[book.id]
      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
      return { wishlist: newWishlist }
    })
  },
  toggleBook: (book) => {
    console.log("Toggling wishlist")
    set(state => {
      const newWishlist = { ...state.wishlist }
      if (newWishlist[book.id]) {
        delete newWishlist[book.id]
      } else {
        newWishlist[book.id] = book
      }
      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
      return { wishlist: newWishlist }
    })
  }
}))

const useInitialDataStore = create( (set) => ({
  initialData: null,
  setInitialData: (data) => set({ initialData: data }),
}))

const useTargetFilterStore = create( (set) => ({
  targetFilter: null,
  setTargetFilter: (filter) => set({ targetFilter: filter }),
}))

const useSearchQueryStore = create( (set) => ({
  query: "",
  setSearchQuery: (query) => set({ query }),
}))

const usePageStore = create( (set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}))

export {
  useBooksDataStore,
  useWishlistStore,
  useInitialDataStore,
  useTargetFilterStore,
  useSearchQueryStore,
  usePageStore,
}
