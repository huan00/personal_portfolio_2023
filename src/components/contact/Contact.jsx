import React from 'react'
import './contact.css'

const Contact = () => {
  const handleClick = () => {
    navigator.clipboard.writeText('hello@huan-zeng.com')
  }
  return (
    <div className="app__contact">
      <p onClick={handleClick}>hello@huan-zeng.com</p>
    </div>
  )
}

export default Contact
