// COMPONENTS 
import Product from './product/product'
// STYLE 
import style from './catalog.module.css'

import { useContext, useState } from 'react'
import { ContextData } from '../context/context'


export default function Catalog(){
    const products = useContext(ContextData)
   
    const productCategories = new Set();
    const [showProducts , setShowProduct] = useState('alba')
    
    
    products.forEach(product => {
        productCategories.add(product.species_epithet)
    });
   
   
    return <section className={style.catalog}>
        <div className={style.catalog__header}>
            <h2>Elevate Your Style with Our Latest Collection</h2>
            <span>Each piece is crafted to enhance your fashion statement.</span>
            <img src="/src/img/AbstractDesign1.svg"  className={style.icon} />
            <ul className={style.catalog__list}>
                
                {Array.from(productCategories).map(e => {
                  return  <li key={e} onClick={() => setShowProduct(e)}  className={style.catalog__item}>
                    {e}
                </li>
                })}
            </ul>
        </div>
        
            <Product products={products.filter(e => e.species_epithet == showProducts)} />
        
    </section>
}