import axios from "axios";
import { useEffect, useState } from "react";

const useBookDetails = (bookId) => {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [abortController, setAbortController] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      if (abortController) {
        abortController.abort()
      }

      const controller = new AbortController()
      setAbortController(controller)

      try {
        const { data } = await axios.get(`https://gutendex.com/books/${bookId}`, {
          signal: controller.signal,
        })

        setBook(data)
        setLoading(false)
      } catch (err) {
        if (err.name === "CanceledError") {
          console.log(err.message)
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      if (abortController) {
        abortController.abort()
      }
    }
  }, [bookId])

  return { book, loading, error }
}

export default useBookDetails;