// Areglos en JavaScript

export const arrays = () =>{
    const frutas = ['Manzana','Fresa','Banano']
    console.log(frutas)

    //Como agregar elemento al final de un array
    frutas.push("Mango")
    console.log(frutas)

    //Como eliminar un elemento al final de un array
    frutas.pop()
    console.log(frutas)

    //Como agregar un elemento al inicio de un array
    frutas.unshift('Sandía')
    console.log(frutas)
    
    //Como eliminar un elemento al inicio de un array
    frutas.shift()
    console.log(frutas)

    //Como recorrer un array
    for (let i = 0; i < frutas.length; i++) {
        console.log( frutas[i] )
    }

    // Como destruturar un array
    const [ Manzana,Fresa,Banano ] = frutas
    console.log( Manzana,Fresa,Banano )

    //Como tranformar un array a un string
    console.log(frutas.toString())
    console.log( typeof frutas.join(' '))

    //Como revertir un array y acceder al ultimo elemento del array
    console.log(frutas.reverse())
    console.log(frutas[frutas.length -1])

}