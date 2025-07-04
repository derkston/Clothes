// STYLE 
import style from './footer.module.css'

// COMPONENTS
import Social from '../social/social'
import { Container } from '../../../container'


export default function Footer(){

    return <footer>
        <Container>
            <Social/>
        </Container>
    </footer>
}