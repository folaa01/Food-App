import React from 'react'
import logo from "../../assets/home/logo.png"
import {AiFillHome} from "react-icons/ai"
import {BsPersonCircle, BsFillCalendarFill} from 'react-icons/bs';
import {HiOutlineShoppingCart} from 'react-icons/hi'
// import cartImg from '../../../assets/dashboard/cart.svg'
import { Link } from 'react-router-dom';
import img1 from '../../assets/dashboard/burger.svg'
import img2 from '../../assets/dashboard/pasta.svg'
import img3 from '../../assets/dashboard/meatball.svg'
import img4 from '../../assets/dashboard/spag.svg'
import img5 from '../../assets/dashboard/bread.svg'
import img6 from '../../assets/dashboard/cake.svg'
import img7 from '../../assets/dashboard/person.svg'
import SingleMeal from '../simgleMeal/SingleMeal';
import './dashboardPage.css'

const DashboardPage = ({meal, onAdd, count}) => {
    document.body.style.backgroundColor = "#fff";

    var name = JSON.parse(sessionStorage.getItem('user'))
    let timeDay = new Date().getHours()
    let timeGreet = null;
    if(timeDay < 12) {
        timeGreet = "Good Morning"
    } else if (timeDay < 16) {
        timeGreet = "Good Afternoon"
    } else if (timeDay < 21) {
        timeGreet = "Good Evening"
    } else {
        timeGreet = "Good Night"
    }

    const meals = [
        {
            id: 1,
            image: img1,
            title: "Stir Fry Pasta",
            description: "The in-house pasta and chicken by chef Moose",
            price: "1,000.00",
            action: "Add to cart"
        },
        {
            id: 2,
            image: img2,
            title: "Stir Fry Pasta",
            description: "The in-house pasta and chicken by chef Moose",
            price: "1,000.00",
            action: "Add to cart"
        },
        {
            id: 3,
            image: img3,
            title: "Stir Fry Pasta",
            description: "The in-house pasta and chicken by chef Moose",
            price: "1,000.00",
            action: "Add to cart"
        },
        {
            id: 4,
            image: img4,
            title: "Stir Fry Pasta",
            description: "The in-house pasta and chicken by chef Moose",
            price: "1,000.00",
            action: "Add to cart"
        },
        {
            id: 5,
            image: img5,
            title: "Stir Fry Pasta",
            description: "The in-house pasta and chicken by chef Moose",
            price: "1,000.00",
            action: "Add to cart"
        },
        {
            id: 6,
            image: img6,
            title: "Stir Fry Pasta",
            description: "The in-house pasta and chicken by chef Moose",
            price: "1,000.00",
            action: "Add to cart"
        },
    ]


  return (
    <section>
        <div className='dashboard'>
            <div className="left-content">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo-img" className='logo-img' /></Link>
                    <p className='logo-name'>Lilies</p>
                </div>
                <ul>
                    <li><Link to="/"><AiFillHome className='icon'/>Dashboard</Link></li>
                    <li><Link to="/"><BsPersonCircle className='icon'/>Your Profile</Link></li>
                    <li><Link to="/"><BsFillCalendarFill className='icon'/>Orders <div className='amount' style={{background: '#06E775'}}>6</div></Link></li>
                    <li><Link to="/SingleMeal"><HiOutlineShoppingCart className='icon' />Your Cart <div className='amount' style={{background: '#F3C294'}}>{count}</div></Link></li>
                </ul>
            </div>
            <div className="right-content">
                {
                    <div className="heading">
                        <div className="user-name">
                            <h3>{timeGreet}, {name?.name}!</h3>
                            <p>What delicious meal are you craving today?</p>
                        </div>
                        <img src={img7} alt="" />
                    </div>
                }

                <div className="meal-box">
                    {meals.map((meal) => {
                        return (
                            <div onClick={SingleMeal} key={meal.id} className="meals">
                                <Link to={`/meal${meal.id}`}><img className='dashboard-imgs' src={meal.image} alt="" /></Link>
                                <h4>{meal.title}</h4>
                                <p>{meal.description}</p>
                                <div className="price-action">
                                    <strong>₦{meal.price}</strong>
                                    <button onClick={()=> onAdd(meal)}>{meal.action}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default DashboardPage