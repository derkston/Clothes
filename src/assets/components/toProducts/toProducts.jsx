// STYLE 
import style from './toProducts.module.css'
// COMPONENTS
import { ShopLink } from '../shoplink/shoplink'

export default function ToProducts(){

    return <div className={style.to_products}>
        <div className={style.to_products__text}>
            <h2>elevate your wardrobe</h2>
            <p>Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</p>
        </div>
        <ShopLink link='/products'/>
        <img src="/src/img/AbstractDesign4.svg" className={style.icon} />
    </div>
}