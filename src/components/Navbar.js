import { Link } from "react-router-dom"


const Navbar = () => {
  return <nav>
    <Link to="/">Domů</Link><br />
    <Link to="/firstpage">První stránka</Link><br />
    <Link to="/secondpage">Druhá stránka</Link>
  </nav>
}


export default Navbar
