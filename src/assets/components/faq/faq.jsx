// Hooks
import { useState } from 'react'
// STYLE
import style from './faq.module.css'
// Components

import FaqList from './faqList/faqList'

const dataList = [
    {
        title : 'How can I place an order on StyleLoom?',
        desc : 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
        id : '0',
        categories : 'Shipping',
    },
    {
        title : 'Can I modify or cancel my order after placing it?',
        desc : 'Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.',
        id : '1',
        categories : 'Shipping',
    },
    {
        title : 'What payment methods do you accept?',
        desc : 'We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.',
        id : '2',
        categories : 'Shipping',
    },
    {
        title : 'How do I initiate a return?',
        desc : 'Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.',
        id : '3',
        categories : 'Shipping',
    },
    {
        title : 'How can I place an order on StyleLoom?',
        desc : `Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.`,
        id : '4',
        categories : 'Shipping',
    },
    {
        title : 'Do you offer exchanges for products?',
        desc : `At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.`,
        id : '5',
        categories : 'Shipping',
    },





    {
        title : 'Ordering',
        desc : 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
        id : '6',
        categories : 'Ordering',
    },
    {
        title : 'Ordering',
        desc : 'Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.',
        id : '7',
        categories : 'Ordering',
    },
    {
        title : 'Ordering',
        desc : 'We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.',
        id : '8',
        categories : 'Ordering',
    },
    {
        title : 'Ordering',
        desc : 'Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.',
        id : '9',
        categories : 'Ordering',
    },
    {
        title : 'Ordering',
        desc : `Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.`,
        id : '10',
        categories : 'Ordering',
    },
    {
        title : 'Ordering',
        desc : `At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.`,
        id : '11',
        categories : 'Ordering',
    },



    {
        title : 'Support',
        desc : 'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
        id : '12',
        categories : 'Support',
    },
    {
        title : 'Support',
        desc : 'Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.',
        id : '13',
        categories : 'Support',
    },
    {
        title : 'Support',
        desc : 'We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.',
        id : '14',
        categories : 'Support',
    },
    {
        title : 'Support',
        desc : 'Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.',
        id : '15',
        categories : 'Support',
    },
    {
        title : 'Support',
        desc : `Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.`,
        id : '16',
        categories : 'Support',
    },
    {
        title : 'Support',
        desc : `At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.`,
        id : '17',
        categories : 'Support',
    },
]


export default function Faq() {
    const [idList , setIdList] = useState('Shipping')
    const newId = new Set();
    dataList.forEach(e => {
        newId.add(e.categories)
    })

    return <section className={style.faq}>
        <div className={style.faq__header}>
            <img src='/src/img/AbstractDesign.svg' className={style.icon} />
            <div className={style.faq__header_text}>
                <h2>Navigating the StyleLoom Fashion Journey.</h2>
                <p>At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.</p>
            </div>
            <div className={style.faq__filter}>
                {Array.from(newId).map((e , i)=> {
                    return <div key={i} onClick={() => setIdList(e)} className={`faq__filter_item ${e == idList ? 'active': '' }`}>
                        {e}
                    </div>
                })}
            </div>
        </div>
        <FaqList list={Array.from(dataList)} id={idList}/>
    </section>
}