// STYLE
import style from './journey.module.css'

export default function Journey(){
    return <section className={style.journey}>
        <div className={style.journey__header}>
            <h2>Navigating the StyleLoom Fashion Journey.</h2>
            <span>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</span>
            <img className={style.icon} src="/src/img/AbstractDesign.svg" />
        </div>
        <ul className={style.journey__list}>
            <li className={style.journey__list_item}>
                <span>Step 01</span>
                <h3>Discover Trends</h3>
                <p>Explore our curated collection of over 1000 styles, spanning global fashion trends.</p>
            </li>
            <li className={style.journey__list_item}>
                <span>Step 02</span>
                <h3>Effortless Navigation</h3>
                <p>Intuitive filters and categories help you find the perfect pieces tailored to your style.</p>
            </li>
            <li className={style.journey__list_item}>
                <span>Step 03</span>
                <h3>Secure Checkout</h3>
                <p>Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.</p>
            </li>
            <li className={style.journey__list_item}>
                <span>Step 04</span>
                <h3>Unbox Happiness</h3>
                <p>Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.</p>
            </li>
        </ul>
    </section>
}