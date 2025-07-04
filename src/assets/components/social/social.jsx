// STYLE 
import style from './social.module.css'
// icon 
import logo from '/src/img/Logo.svg'
export default function Social(){
    return <div className={style.social}>
        <img src={logo} className={style.logo}/>
        <ul className={style.social_list}>
                <li key='instagram' className={style.social_list__item}>
                    <a href="/"  className='social__link'>
                        <img src="/src/img/social/icon.svg" className={style.social_link_icon} alt="instagram" />
                    </a>
                </li>
                <li key='circle'className={style.social_list__item}>
                    <a href="/"  className='social__link'>
                        <img src="/src/img/social/icon1.svg" className={style.social_link_icon} alt="circle" />
                    </a>
                </li>
                <li key='twitter'  className={style.social_list__item}>
                    <a href="/" className='social__link'>
                        <img src="/src/img/social/icon2.svg" className={style.social_link_icon} alt="twitter" />
                    </a>
                </li>
                <li key='be' className={style.social_list__item}>
                    <a href="/"  className='social__link'>
                        <img src="/src/img/social/icon3.svg" className={style.social_link_icon} alt="be" />
                    </a>
                </li>
                
        </ul>
    </div>
}