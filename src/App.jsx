import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Header from "./Components/Header"
import Wishlist from "./pages/Wishlist"
import BookDetails from "./pages/BookDetails"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  )
}

export default App
