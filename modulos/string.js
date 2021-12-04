/* Modulos en JavaScript */
export const string = () => {
    const saludo = 'Hola Ángel'
    console.log(saludo.length) //Devuelve 10

    const mayusculas = saludo.toUpperCase() // ==> transforma a mayusculas una cadena de texto
    const minusculas = saludo.toLowerCase() // ==> Transforma a minusculas una cadena de texto
    console.log(minusculas,mayusculas)

    let mensaje = 'Hello guys, my name is Angel'
    console.log( mensaje.split(' '))
    console.log( mensaje.substring( 0,5 ))
    const revertir = saludo.split(' ')
    console.info( revertir.reverse().join(' ') )

    /* El prototipo join() convierte un array a string y recive como argumento el tipo de separacion del string */
    /* Tambien podemos usar toString() para Tranformar el array teniendo en cuenta que su separador sera por comas */

    let n
    const sinDato = +n
    console.log(sinDato) // ===> Devuelve NaN

    //Como usar los templeString e interpolar Variables

    let name = 'Katherine'
    let surname = 'Larios'
    let age = 20

    console.log( name + ' ' + surname + ' ' + age )
    console.log( `${name} ${surname} ${age}`)
    console.log( name.charAt(1), name[1] ) // ==> " a "

    //indexOf indica la longitud de un elemento dentro de un string 
    console.log( saludo.indexOf('a') )
}