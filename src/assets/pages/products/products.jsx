// COMPONENTS
import { Container } from '../../../container'
import Catalog from '../../components/catalog/catalog'
import Faq from '../../components/faq/faq'
import Reviews from '../../components/reviews/reviews'

// STYLE
import style from './products.module.css'

export default function Products(){

    return <main>
        
        <Container>
            <Catalog/>
            <Reviews/>
            <Faq/>
        </Container>
    </main>
}