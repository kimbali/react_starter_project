// MOKED DATA
const coco = { name: 'coco', type: 'fruit', color: 'white', origin: 'palm' }
const melocoton = { name: 'melocoton', type: 'fruit', color: 'orange', origin: 'melocotonero' }
const sandia = { name: 'sandia', type: 'fruit', color: 'pink', origin: 'ground' }

// GLOBAL METHOS
const JSmethods = {
  console: () => {
    console.log('%c FRUIT YOURSELF', 'color: pink; font-weight: bold; font-size: 32px')
    console.log({ coco, melocoton, sandia })
    console.time('Tiempo invertido en pintar la tabla')
    console.table([coco, melocoton, sandia])
    console.timeEnd('Tiempo invertido en pintar la tabla')
    return true
  },
  strings: (str, var1, var2, var3, var4) => {
    // Usage: strings`Primera parte ${parteVariable1} segunda string ${parteVariable2}`
    return console.log(`${str[0]} ${var1} ${str[1]} ${var2} ${str[2]} ${var3} ${str[3]} ${var4}`)
  }
}

JSmethods.console()

export default JSmethods

/**
 * CLOSURES
 * Funciones dentro de funciones.
 * Patron parecido a las classes.
 *
 * Las funciones en JS son objectos.
 * Cada funcion tiene un scope diferente.
 *
 * const myClosure = (function () {})()
 * {} dentro de los corchetes puedes definir variables que seran inaccesibles desde fuera.
 * {} dentro de los corchetes tiene que haber un return de lo que quieres q sea visible.
 */

/**
 * ARRAY REDUCE
 * Sirve para hacer cualquier cosa con una lista.
 *
 * const list = [0, 1, 2, 3, 4]
 * const newList = list.reduce((acc, current) => acc + current), {}) --> tendrias la media.
 *
 */

/**
 * SORT ARRAY BY NAME
 * localeCompare
 *
 * const handleSort = () => {
    updatedData.sort((a, b) => a.location.country.localeCompare(b.location.country))
  }
 */
