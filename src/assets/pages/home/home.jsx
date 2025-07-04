// COMPONENTS
import Preview from './preview/preview'
import Advantages from './advantages/advantages'
import Journey from './journey/journey'
import Catalog from '../../components/catalog/catalog'
import { Container } from '../../../container'
import Loading from '../../components/loading/loading'
import Reviews from '../../components/reviews/reviews'
import Faq from '../../components/faq/faq.jsx'
import ToProducts from '../../components/toProducts/toProducts.jsx'
import RunningLine from '../../components/runningLine/runningLine.jsx'
// STYLE
import style from './home.module.css'
// IMG 
import preview from '../../../img/preview.png'
import Social from '../../components/social/social.jsx'









export default function Home(){
    
   
    
    
    return <main className={style.home}>
        <Container>
            <Preview data={preview}/>
            <Advantages/>
            <Journey/>
            <Loading>
                <Catalog/>
            </Loading>
            <Reviews/>
            <Faq/>
            <ToProducts/>
        </Container>
        <RunningLine/>
        
    </main>
}