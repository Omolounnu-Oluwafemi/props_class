import React from 'react'
import '../assests/login.css'

const Button = (props) => {
const { title, bgColor } = props
    
  return (
    <div>
        <button type="submit" style={{backgroundColor:bgColor}}>{title}</button>
    </div>
  )
}

export default Button
