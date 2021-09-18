import { FaWhatsapp, FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { RiSave3Fill } from 'react-icons/ri'
import { FiAtSign } from 'react-icons/fi'

const socialMessages = {
  developer: {
    message: encodeURI(
      'Muy buenas, estoy buscando un programador eficaz y de confianza, y creo que la he encontrado. Me presento...'
    ),
    number: '+34657946204'
  },
  oficial: {
    name: 'Randome Company',
    number: '+34629653721',
    email: 'bbrick.casa@gmail.com',
    subject: 'Titulo del mensaje',
    message: encodeURI(
        `Buenos dias RANDOME, 
      
            Necesito...`)
  }
}

const socialLinks = {
  whatsapp: {
    id: 'whatsapp',
    Icon: <FaWhatsapp />,
    url: 'https://api.whatsapp.com/send?phone=+34657946204&text=hey',
    text: 'Open a conversation in whatsapp'
  },
  phone: {
    id: 'phone',
    Icon: <MdPhoneIphone />,
    url: 'tel:+34657946204',
    text: 'Try to find me on phone'
  },
  email: {
    id: 'email',
    Icon: <FiAtSign />,
    url: 'mailto:kimgarcianton@hotmail.com?subject=Hey&body=Emailingyou',
    text: 'Send a short email'
  },
  instagram: {
    id: 'instagram',
    Icon: <FaInstagram />,
    url: 'https://www.instagram.com/kim_k_kim/?hl=es',
    text: 'See how awesome is my life through images'
  },
  facebook: {
    id: 'facebook',
    Icon: <FaFacebook />,
    url: 'https://www.facebook.com/kimgarcianton/',
    text: 'Aks for a new virtual friend'
  },
  linkedin: {
    id: 'linkedin',
    Icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/kim-garcia-9b0b86136/',
    text: 'See my list of random jobs'
  },
  github: {
    id: 'github',
    Icon: <FaGithub />,
    url: 'https://github.com/kimbali',
    text: 'See public repositories'
  },
  extra: {
    id: 'extra',
    Icon: <RiSave3Fill />,
    url: '/',
    text: 'Extras'
  }
}

export { socialLinks, socialMessages }
