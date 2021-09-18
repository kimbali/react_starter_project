import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { socialLinks } from 'data/social'

function Footer () {
  const copyIcon = <AiOutlineCopyrightCircle />
  const copyrightLink = (
    <a
      className='copyright'
      href={socialLinks.whatsapp.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {copyIcon}
      {`Copyright Kimbali ${new Date().getFullYear()}`}
    </a>
  )

  return (
    <footer>
      {copyrightLink}
    </footer>
  )
}

export default Footer
