import { Link } from "react-router-dom"


const Navbar = () => {
  return <nav>
    <Link to="/">Domů</Link><br />
    <Link to="/movies">Filmy</Link><br />
    <Link to="/serials">Seriály</Link>
  </nav>
}


export default Navbar
