// STYLE
import style from './advantages.module.css'
export default function Advantages(){
    return <section className={style.advantages}>
                    <div className={style.advantages__header}>
                        <h2>Crafting Trends, Inspiring Confidence</h2>
                        <span>Explore a world of fashion at StyleLoom, where trends meet affordability.</span>
                    </div>
                    <ul className={style.advantages__list}>
                        <li className={style.advantages__list_item}>
                            <img src="/src/img/ic1.1.svg"  />
                            <img src="/src/img/ic1.svg" className={style.icon} />
                            <h3>Passionate Craftsmanship</h3>
                            <p>Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.</p>
                        </li>
                        <li className={style.advantages__list_item}>
                            <img src="/src/img/Union.svg"  />
                            <img src="/src/img/IconContainer.svg" className={style.icon} />
    
                            <h3>Fashion Forward</h3>
                            <p>We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.</p>
                        </li>
                        <li className={style.advantages__list_item}>
                            <img src="/src/img/Vector.svg"  />
                            <img src="/src/img/IconContainer-1.svg" className={style.icon} />
    
                            <h3>Customer-Centric Approach</h3>
                            <p>At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.</p>
                        </li>
                        <li className={style.advantages__list_item}>
                            <img src="/src/img/Vector-1.svg"  />
                            <img src="/src/img/IconContainer-2.svg" className={style.icon} />
    
                            <h3>Global Inspiration</h3>
                            <p>Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.</p>
                        </li>
                        <li className={style.advantages__list_item}>
                            <img src="/src/img/Icon.svg"  />
                            <img src="/src/img/IconContainer4.svg" className={style.icon} />
    
                            <h3>Empowering Your Style</h3>
                            <p>Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.</p>
                        </li>
                        <li className={style.advantages__list_item}>
                            <img src="/src/img/Icon-1.svg"  />
                            <img src="/src/img/IconContainer-3.svg" className={style.icon} />
    
                            <h3>Sustainable Practices</h3>
                            <p>StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.</p>
                        </li>
                    </ul>
                </section>
}