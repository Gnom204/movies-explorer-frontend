import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
function Header(props) {
    return (
        <header className="header">
            <NavLink to='/' className="logo" />
            <Navigation isLoggedIn={props.isLoggedIn} />
        </header>
    )
}
export default Header