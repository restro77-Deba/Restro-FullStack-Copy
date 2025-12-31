import React from 'react'
import style from './testimonials.module.css'
import { assets } from '../../assets/assets'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Aurosis",
            role: "Food Blogger",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            text: "It’s not just food, it’s an experience. The flavors are perfectly balanced."
        },
        {
            id: 2,
            name: "Hitesh Sejpada",
            role: "Meal Subscriber",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4,
            text: "Authentic taste! The Schezwan Noodles remind me of home."
        },
        {
            id: 3,
            name: "Debasish Dash",
            role: "Developer",
            image: "https://randomuser.me/api/portraits/men/86.jpg",
            rating: 4,
            text: "Super fast delivery and the packaging keeps everything fresh and hot."
        },
        {
            id: 4,
            name: "Ashutosh Pradhan",
            role: "Regular Customer",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: 4.5,
            text: "The UI is smooth and the food is even better. Truly premium service."
        }
    ];

    return (
        <div className={style.testimonials} id='testimonials'>
            <h2>Loved by Thousands</h2>
            <div className={style.marqueeContainer}>
                <div className={style.marqueeContent}>
                    {/* Tripled list for seamless infinite scrolling */}
                    {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                        <div key={index} className={style.card}>
                            <div className={style.quoteIcon}>❝</div>
                            <p className={style.text}>{item.text}</p>
                            <div className={style.cardFooter}>
                                <img src={item.image} alt={item.name} className={style.avatar} />
                                <div className={style.userInfo}>
                                    <h3>{item.name}</h3>
                                    <div className={style.stars}>{"★".repeat(item.rating)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
