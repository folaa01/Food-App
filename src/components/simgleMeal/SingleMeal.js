import React from 'react'
import Dashboard from '../Dashboard/DashboardPage'
import { useParams, Link } from 'react-router-dom'
import {AiOutlineArrowLeft, AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'

const SingleMeal = ({meal, onAdd, onRemove, quantity}) => {

    const { id } = useParams()


  return (
    <div className="singlemeal-container">
        <div>
            {meal.id === id ? 
               <div>
                    <div className="food">
                        <Dashboard />
                    </div>
                    <div className="singlemeal">
                        <Link to='/Dashboard'><AiOutlineArrowLeft className='back' /></Link>
                        <img src={meal.image} alt="" />
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                        <div className="price">
                            <p>₦{meal.price}</p>
                            <p>10-20 Mins</p>
                            <p>10pcs Avail</p>
                        </div>
                        <div className="action">
                            <div className="quantity">
                                {quantity.map((q)=> {
                                    return (
                                        <div>
                                            {q.quantity ?<div><AiFillMinusSquare className='icon' onClick={()=>onRemove(meal)} /><p>{q.quantity}</p><AiFillPlusSquare className='icon' onClick={()=>onAdd(meal)}/></div> : " "}
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={()=> onAdd(meal)}>Add to cart</button>
                        </div>
                    </div>
               </div> : " "
            }
        </div>
    </div>
  )
}

export default SingleMeal
