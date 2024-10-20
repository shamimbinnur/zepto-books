import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useBooksDataStore, useInitialDataStore, usePageStore, useSearchQueryStore } from "../store/useWishlistStore"
import { transformDataWithGenres } from "../utils/utils"

const useBooksData = (delay = 500) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [abortController, setAbortController] = useState(null)
  const isFirstRender = useRef(true)
  
  const { booksData, setBooksData } = useBooksDataStore()
  const { initialData, setInitialData } = useInitialDataStore()
  const { query } = useSearchQueryStore(state => state)
  const { page, setPage } = usePageStore(state => state)

  const fetchData = async () => {
    setLoading(true)
    if (abortController) {
      abortController.abort()
    }

    const controller = new AbortController()
    setAbortController(controller)

    try {
      const { data } = await axios.get(`https://gutendex.com/books/`, {
        params: { search: query, page },
        signal: controller.signal,
      });
    
      setBooksData(transformDataWithGenres(data))
      setLoading(false);
      
      if (!initialData) {
        setInitialData(data)
      }
    } catch (err) {
      if (err.name !== "CanceledError") {
        console.log(err.message)
        setError(err)
        setLoading(false)
      }
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      fetchData()
      return
    }

    const handler = setTimeout(() => {
      if (query) {
        setPage(1)
        fetchData()
      } else {
        setBooksData(initialData)
        setPage(1)
      }
    }, delay)

    return () => {
      clearTimeout(handler)

      if (abortController) {
        abortController.abort()
      }
    }
  }, [query, delay])

  return { booksData, loading, error }
}

export default useBooksData