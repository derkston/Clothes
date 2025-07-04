// STYLE 
import style from './reviews.module.css'
// COMPONENTS
import ReviewsList from './reviewsCard/reviewsList'


export default function Reviews(){

    return <section className={style.reviews}>
        <div className={style.reviews__header}>
            <h2>The StyleLoom Testimonial Collection.</h2>
            <span>At StyleLoom, our customers are the heartbeat of our brand.</span>
            <img src='/src/img/AbstractDesign2.svg' className={style.icon} />
        </div>
        <ReviewsList/>
    </section>
} 