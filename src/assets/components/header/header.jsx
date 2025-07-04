// COMPONENTS 
import { NavLink } from 'react-router'
import { Container } from '../../../container'
// STYLE 
import style from './header.module.css'
// img
import logo from '../../../img/Logo.svg'
import basket_icon from '../../../img/basket.svg'

export default function Header(){

    return <header>
        <Container>
            <nav className={style.navigation}>
                <div className={style.navigation_left}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                </div>
                <img src={logo} />
                <div className={style.navigation_right}>
                    <NavLink className={style.basket} to='/basket'><img src={basket_icon} /></NavLink>
                    <NavLink className={style.contact__link} to='/contacts'>Contact</NavLink>
                </div>
            </nav>
        </Container>
    </header>
}