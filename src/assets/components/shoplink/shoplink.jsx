// HOOKS 
import { NavLink } from 'react-router'
// STYLE 
import style from './shoplink.module.css'
// IMG
import shoplink from '../../../img/shoplink.svg'
export function ShopLink({link}){
   
    return <NavLink className={style.link} to={link}>
        Shop Link <img src={shoplink} alt="" />
    </NavLink>
}