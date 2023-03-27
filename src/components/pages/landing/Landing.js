import React from 'react'
import { Link } from 'wouter'

function Landing () {
  return (
    <div>
      <h1 className='hello-title'>HELLO</h1>
      <h2 className='hello-subtitle'>WORLD</h2>
      <Link to='/profile/kims'>
        Link to profile
      </Link>
    </div>
  )
}

export default Landing
