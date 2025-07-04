// COMPONENTS
import Header from './assets/components/header/header'
import Footer from './assets/components/footer/footer'
import Home from './assets/pages/home/home.jsx'
import Products from './assets/pages/products/products'
import Contacts from './assets/pages/contact/contacts'
import { ContextData } from './assets/components/context/context.jsx'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
// HOOKS

export default function App(){
    const [products , setProducts] = useState([])
    // Получаем готовый массив данных с сервера и записываем их в products
    const getData = async (url) => {
                  const res = await fetch(url).then(res => res.json())
                  
                  try {
                      setProducts(res.data)                       
                  } catch(e){
                      console.error(e)
                  }
              }
      useEffect(()=>{
              
              getData('https://perenual.com/api/v2/species-list?key=sk-UMf0684535d50174b10868')
          },[])
     
   return <ContextData value={products}>
            <BrowserRouter>
              <Header/>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/products' element={<Products/>} />
                  <Route path='/contacts' element={<Contacts/>} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </ContextData>
}