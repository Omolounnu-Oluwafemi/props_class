import React from 'react'
import '../assests/login.css'
import Button from '../components/Button'

const Signup = (props) => {
  return (
      <div className='login-container'>
        <form className='login-form'>
        <h2>Signup</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <Button title={'Signup'} />
      </form>
    </div>
  )
}

export default Signup
