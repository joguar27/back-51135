// let nombre = 'Ana';
// nombre = 'Camila';

// const objeto = {
//     nombre: 'Jorge',
//     apellido: 'Arruda'
// }

// let array = []
// array = [true]

// console.log(typeof (objeto));
// console.log(objeto);

//copia por referencia
let obj1 = {
    name: 'Jorge',
    edad: 57
}
console.log(obj1)

let obj2 = {...obj1}
console.log(obj2)

obj2.name = "Lucas"
obj2.pais = "Argentina"
console.log(obj2)

console.log('Objeto 1')
console.log(obj1)

const array2 = [1, 2, 3, 4, "perro"]




console.log(array2)
array2.push("gato")
console.log(array2)