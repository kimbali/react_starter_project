export const saludoMomentoDia = () => {
  let saludoActualizado = ''
  const currentHour = new Date().getHours()

  if (currentHour > 19 || currentHour <= 4) {
    saludoActualizado = 'Buenas noches'
  }

  if (currentHour > 4 && currentHour <= 12) {
    saludoActualizado = 'Buenos días'
  }

  if (currentHour > 12 && currentHour <= 19) {
    saludoActualizado = 'Buenas tardes'
  }

  return saludoActualizado
}

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 992
}

export const isMobile = () => window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet
export const isTablet = () => window.innerWidth >= breakpoints.tablet && window.innerWidth < breakpoints.desktop
export const isDesktop = () => window.innerWidth >= breakpoints.desktop

// Copiar text
export const copiarAlPortapapeles = (id) => {
  // Crea un campo de texto "oculto"
  const aux = document.createElement('input')
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute('value', id)
  // Añade el campo a la página
  document.body.appendChild(aux)
  // Selecciona el contenido del campo
  aux.select()
  // Copia el texto seleccionado
  document.execCommand('copy')
  // Elimina el campo de la página
  document.body.removeChild(aux)
}

// Return top position of an element in document
export const getElementPositionInDocument = (element) => {
  const el = typeof element === 'string' ? document.getElementById(element) : element

  if (!el) return undefined

  const box = el.getBoundingClientRect()

  const { body } = document
  const docEl = document.documentElement

  if (typeof window === 'undefined') return 0
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const clientTop = docEl.clientTop || body.clientTop || 0
  const top = box.top + scrollTop - clientTop

  return Math.round(top)
}

export const getWeekDay = () => {
  const week = [
    'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'
  ]
  const weekDay = week[new Date().getDay()]
  return weekDay
}

export const getMonthName = () => {
  const week = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'
  ]
  const weekDay = week[new Date().getMonth()]
  return weekDay
}

export const getDayNum = () => new Date().getDate()

export const getSpanishFullDay = () => {
  const fullDate = `${getWeekDay()} ${getDayNum()} ${getMonthName()}`
  return fullDate
}

export const validateEmail = email => {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
}
