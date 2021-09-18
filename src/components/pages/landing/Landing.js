import React from 'react'
import { Link } from 'wouter'

function Landing () {
  return (
    <div>
      <h1 className='hello-title'>HELLO</h1>
      <h2 className='hello-subtitle'>DARLING</h2>
      <Link to='/profile/kims'>
        Link to Kims profile
      </Link>
    </div>
  )
}

export default Landing
