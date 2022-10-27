import React from 'react'
import Navbar from '../components/Home/navbar/Navbar'
import Hero from '../components/Home/hero/Hero'
import Meal from '../components/Home/meal/Meal'
import Notify from '../components/Home/notify/Notify'
import Footer from '../components/Home/footer/Footer'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Meal />
        <Notify />
        <Footer />
    </React.Fragment>
  )
}

export default Home