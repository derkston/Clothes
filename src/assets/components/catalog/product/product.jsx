
import style from './product.module.css'


export default function Product({products}){
   
    return <ul className={style.product}>
            {products.map(e => {
                
                return <li key={e.id} className={style.product__item}>
                    <img src={ e.default_image != null ? e.default_image.regular_url : 'src/img/img-empty.png'} alt={e.common_name} />
                    <div className={style.product__categories}>
                        <span>{e.species_epithet}</span>
                        
                    </div>
                    <h3>{e.common_name}</h3>
                   
                </li>
            })}
        </ul>
}