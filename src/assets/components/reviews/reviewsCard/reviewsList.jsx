// STYLE
import style from './reviewsList.module.css'

export default function ReviewsList(){
    return <ul className={style.list}>
        <li className={style.list__item}>
            <div className={style.profile}>
                <img src="/src/img/reviews/Image.png" className={style.profile__icon} />
                <div className={style.profile__text}>
                    <h3 className={style.name}>Sarah Thompson</h3>
                    <span className={style.location}>New York, USA</span>
                </div>
                <div className={style.social}>
                    <img className={style.social__icon} src="/src/img/twitter.svg"  />
                </div>
            </div>
            <div className={style.rating}>
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
            </div>
            <p className={style.rating__text}> StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!</p>
        </li>
        <li className={style.list__item}>
            <div className={style.profile}>
                <img src="/src/img/reviews/Image-1.png" className={style.profile__icon} />
                <div className={style.profile__text}>
                    <h3 className={style.name}>Rajesh Patel</h3>
                    <span className={style.location}>Mumbai, India</span>
                </div>
                <div className={style.social}>
                    <img className={style.social__icon} src="/src/img/twitter.svg"  />
                </div>
            </div>
            <div className={style.rating}>
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
            </div>
            <p className={style.rating__text}>Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!</p>
        </li>
        <li className={style.list__item}>
            <div className={style.profile}>
                <img src="/src/img/reviews/Image-2.png" className={style.profile__icon} />
                <div className={style.profile__text}>
                    <h3 className={style.name}>Emily Walker</h3>
                    <span className={style.location}>London, UK</span>
                </div>
                <div className={style.social}>
                    <img className={style.social__icon} src="/src/img/twitter.svg"  />
                </div>
            </div>
            <div className={style.rating}>
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
            </div>
            <p className={style.rating__text}>Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.</p>
        </li>
        <li className={style.list__item}>
            <div className={style.profile}>
                <img src="/src/img/reviews/Image-3.png" className={style.profile__icon} />
                <div className={style.profile__text}>
                    <h3 className={style.name}>Alejandro Martinez</h3>
                    <span className={style.location}>Barcelona, Spain</span>
                </div>
                <div className={style.social}>
                    <img className={style.social__icon} src="/src/img/twitter.svg"  />
                </div>
            </div>
            <div className={style.rating}>
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
            </div>
            <p className={style.rating__text}>Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!</p>
        </li>
        <li className={style.list__item}>
            <div className={style.profile}>
                <img src="/src/img/reviews/Image-4.png" className={style.profile__icon} />
                <div className={style.profile__text}>
                    <h3 className={style.name}>Priya Sharma</h3>
                    <span className={style.location}>Delhi, India</span>
                </div>
                <div className={style.social}>
                    <img className={style.social__icon} src="/src/img/twitter.svg"  />
                </div>
            </div>
            <div className={style.rating}>
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
            </div>
            <p className={style.rating__text}> Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings.</p>
        </li>
        <li className={style.list__item}>
            <div className={style.profile}>
                <img src="/src/img/reviews/Image-5.png" className={style.profile__icon} />
                <div className={style.profile__text}>
                    <h3 className={style.name}>Maria Rodriguez</h3>
                    <span className={style.location}>Mexico City, Mexico</span>
                </div>
                <div className={style.social}>
                    <img className={style.social__icon} src="/src/img/twitter.svg"  />
                </div>
            </div>
            <div className={style.rating}>
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
                <img src='/src/img/reviews/Shape.svg' className={style.rating__icon} />
            </div>
            <p className={style.rating__text}>Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality.</p>
        </li>
        
    </ul>
}