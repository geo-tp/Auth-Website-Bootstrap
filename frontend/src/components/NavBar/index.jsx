import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/auth">Auth</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default NavBar
