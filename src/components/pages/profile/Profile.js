import React from 'react'
import { Link } from 'wouter'

function Profile ({ params }) {
  const { nikname } = params
  return (
    <div>
      PROFILE {nikname}
      <Link to='/'>
        Back to landing
      </Link>
    </div>
  )
}

export default Profile
