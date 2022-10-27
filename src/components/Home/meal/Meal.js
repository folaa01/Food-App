import React from 'react'
import pasta from '../../../assets/home/pasta.svg'
import meatballs from '../../../assets/home/meatballs.svg'
import burger from '../../../assets/home/burger.svg'
import './meal.css'

const Meal = () => {
  return (
    <section>
        <div className="meal">
            <div className="meal-heading">
                <h2>Special Meals of the day!</h2>
                <p>Check our specials of the day and get discounts on all our meals <br />and swift delivery to whatever location within Ilorin.</p>
            </div>
            <div className="meal-content">
                <div className="pasta">
                    <img src={pasta} alt="" />
                    <h3>Stir fry Pasta</h3>
                    <p>stir fry pasta yada yada yada <br />because of Sesan</p>
                </div>
                <div className="meat-balls">
                    <img src={meatballs} alt="" />
                    <h3>Meat Balls</h3>
                    <p>stir fry pasta yada yada yada <br />because of Sesan</p>
                </div>
                <div className="burger">
                    <img src={burger} alt="" />
                    <h3>Burger Meal</h3>
                    <p>stir fry pasta yada yada yada <br />because of Sesan</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meal