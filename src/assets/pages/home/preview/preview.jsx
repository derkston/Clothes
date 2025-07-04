// style 
import { NavLink } from 'react-router'
import { ShopLink } from '../../../components/shoplink/shoplink'
import style from './preview.module.css'

export default function Preview({data}){

    return <section className={style.preview}>
        <img src={data}  />
        <ShopLink link='/basket'/>
        <div className={style.info}>
            <div className={style.info__text}>
                <div className={style.product__categories}>
                    <NavLink to='/products'>All</NavLink>
                    <NavLink to='/products/men'>Mens</NavLink>
                    <NavLink to='/products/women'>Women</NavLink>
                    <NavLink to='/products/kid'>Kids</NavLink>
                </div>
                <h2>Elevate Your Style with StyleLoom</h2>
                <p>Explore a world of fashion at StyleLoom, where trends meet affordability. 
                    <br/>  Immerse yourself in the latest styles and seize exclusive promotions.</p>
            </div>
            <ul className={style.info__list}>
                <li className={style.info__list_item}>
                    <h2>1,500 +</h2>
                    <span>New arrivals every month.</span>
                </li>
                
                <li className={style.info__list_item}>
                    <h2>50 +</h2>
                    <span>Fashion Products</span>
                </li>
                
                <li className={style.info__list_item}>
                    <h2>30%</h2>
                    <span>OFF on select items.</span>
                </li>
                
                <li className={style.info__list_item}>
                    <h2>90%</h2>
                    <span>Customer Satisfaction Rate</span>
                </li>
             
            </ul>
        </div>
    </section>
}