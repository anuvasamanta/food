import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/style.css'
function Error() {
  return (
    <div className='error'>
      <div className="sub-error">
        <h1>You Need to SignIn First!</h1>
        <Link to="/signin" className='btn btn-success'>Go to SignIn</Link>
        </div>
    </div>
  )
}

export default Error
