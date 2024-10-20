import Books from "../Components/home/Books"
import useBooksData from "../hooks/useBooksData"
import BookSkeletons from "../Components/home/BookSkeletons"
import Controls from "../Components/home/Controls"

const Home = () => {
  const { loading, booksData } = useBooksData()

  return (
    <div className="max-w-8xl">
      <Controls />
      {loading
      ? <BookSkeletons />
      : <Books loading={loading} booksData={booksData}/>
      }
    </div>
  )
}

export default Home