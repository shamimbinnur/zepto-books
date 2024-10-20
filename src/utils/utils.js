export const shortenString = (str, maxLen) => {
  if (str.length <= maxLen) return str
  return str.slice(0, maxLen) + "..."
}

export const formatNumber = (num) => {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"
  if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"
  if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"
  return num
}

export const transformDataWithGenres = (data) => {
  return {
    ...data,
    results: data.results.map((book) => {
      const genres = {}
      book.bookshelves.forEach(bookshelf => {
        if (bookshelf.includes("Browsing:")) {
          const genre = bookshelf.split("Browsing:")[1].trim()
          genres[genre] = true
        }
      })

      return {
        ...book,
        genres
      };
    })
  };
}

export const filterBooksByGenre = (data, genre) => {
  return data.results.filter(book => {
    return book.genres && book.genres[genre]
  });
}