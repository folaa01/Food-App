import React from 'react'
import './notify.css'

const Notify = () => {
  return (
    <section>
      <div className="notify">
        <div className="notify-text">
          <h1>Get notified when we update!</h1>
          <p>Get notified when we add new items to our specials menu, <br />update our price list of have promos!</p>
        </div>
        <div className="notify-form">
          <form className='form' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder='gregphillips@gmail.com' />
            <button type='submit'>Get notified</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Notify