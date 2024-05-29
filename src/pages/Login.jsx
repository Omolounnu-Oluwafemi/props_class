import React from 'react'
import '../assests/login.css'
import Button from '../components/Button'
const Login = () => {

  return (
      <div className='login-container'>
    <form className='login-form'>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <Button title={'Login'} bgColor={'#ff0000'} />
      </form>
    </div>
  )
}

export default Login
