import { FaStar } from "react-icons/fa"
import { ImBooks } from "react-icons/im"
import { useNavigate } from "react-router-dom"

const Nav = () => {
  const navLinks = [
    { title: "Library", icon:<ImBooks />, path: "/" },
    { title: "Wishlist", icon: <FaStar />, path: "/wishlist" },
  ]

  const activeLinkStyle = "border border-gray-700"
  const inActiveLinkStyle = "border border-gray-200"
  const isActive = (path) => window.location.pathname === path

  const navigate = useNavigate()

  return (
    <header className="mx-auto max-w-5xl flex justify-between my-10 px-4">
      <a href="/">
        <h1 className="font-medium text-gray-700 text-lg">ZeptoBooks</h1>
      </a>
      <nav>
        <ul className="flex gap-x-2 md:gap-x-6 text-sm md:text-lg text-gray-700">
          {navLinks.map((link, index) => (
            <li
              onClick={()=> navigate(link.path)}
              key={index}
              className={`${isActive(link.path) ? activeLinkStyle : inActiveLinkStyle} border rounded-full px-3 py-1 cursor-pointer`}
            >
              <a className="flex items-center gap-x-1">
                <span>{link.icon}</span>{link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav