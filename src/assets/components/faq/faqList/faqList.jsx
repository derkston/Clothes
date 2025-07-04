import style from './faqList.module.css'

export default function FaqList({list , id}){
    
    const newList = list.filter( e => e.categories == id)
    return <ul className={style.faq__list}>
        {newList.map(e => {
            return <li key={e.id} className={style.faq__list_item}>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
            </li>
        })}
    </ul>
    
}