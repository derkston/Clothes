import { Container } from '../../../container'
import Faq from '../../components/faq/faq'
import Reviews from '../../components/reviews/reviews'
import style from './contacts.module.css'

export default function Contacts(){

    return <main>
       
        <Container>
            <Reviews/>
            <Faq/>
        </Container>
    </main>
}