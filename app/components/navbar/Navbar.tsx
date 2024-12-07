import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import {ActiveLink} from "../active-link/ActiveLink"

const Navbar = () => {

  const navItems = [
    { 'path': '/about', 'name': 'About' },
    { 'path': '/pricing', 'name': 'Pricing' },
    { 'path': '/contact', 'name': 'Contact' },
  ]

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center mr-2">
        <HomeIcon size={16} className="mr-2" />
        <span>Home</span>
      </Link>
      {
        navItems.map((navItem) => (
          // path={navItem.path} name={navItem.name}
          <ActiveLink key={navItem.path}  {...navItem} /> 
      ))
    }
    </nav>
  )
}

export default Navbar
