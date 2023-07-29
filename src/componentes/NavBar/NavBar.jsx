import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logoGNR.jpg" className='imgGeek' alt="Logo GEEK N RESIN" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/2"> Posavasos </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Otros productos </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar