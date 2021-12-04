// Objetos en JavaScripr
export const objetos = () => {
    const persona = {
        name:'Fernando',
        surname:'Gutierrez',
        age:23,
        gender:'Masculino',
        saludo: function () {
            console.log(`Hello my name is ${this.name} ${this.surname}, I am ${this.age} years old`)
        }
    }
    persona.saludo()

    //Como crear un objeto literario

    const powers = ['Fireball','iceball'], colors =['Black','Red']
    const weigth = 250

    const godzillaParams= {
        powers,
        colors,
        weigth
    }

    const createGodzilla = godzillaParams => {
        let [fireBall,iceBall] = powers
        fireBall = 100
        iceBall = 50
        let Combo = fireBall * iceBall

        console.log(Combo)
    }

    createGodzilla(godzillaParams)

    function person ( name,age,sex,email ) {
        this.name = name,
        this.age = age,
        this.sex = sex,
        this.email = email
    }

    const usuario1 = new person( 'Dayhania',20,'Femenino','dayhaniaObando@gmail.com' )
    const usuario2  = new person( 'Angel',20,'Masculino','delgadoangel062@gmail.com')

    person.prototype.saludo = function () {
        console.log(`Hola me llamo ${this.name} y tengo ${this.age} años, es un gusto trabajar contigo`)
    }
    usuario1.saludo()
    usuario2.saludo()

    console.log(usuario1,usuario2)

    //Commo eliminar propiedades de un objeto 

    const car  = {
        marca:'Ford',
        modelo:'Mustang',
        año:1985
    }

    console.log(car)
    delete car.marca
    console.log(car)
}