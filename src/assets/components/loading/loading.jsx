// HOOKS
import { useContext, useState } from 'react'
import { ContextData } from '../context/context'
// STYLE 
import style from './loading.module.css'
// IMG
import loadingAnimate from './loading.gif'

export default function Loading({children}){
    const products = useContext(ContextData)
     if (products == undefined || products.length == 0 || products.length == undefined ){

        return  <div className={style.loading}>
            <img src={loadingAnimate}/>
        </div>
    }else {
     
        return children
    }
    
}