// scope de las variables

// let i = 10;



// const testScope = function () {
//     let i = 0;
//     console.log(i);
//     if(true){
//         const variable = 12
//         console.log(variable);
//     }
//     //console.log(variable);
// }

// testScope();

// console.log(i);



//Funciones 
//Funcion suma de forma tradicional en 5 lineas
// const suma = (a, b) => {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(suma (2, 5))

//Funcion suma de forma mas corta en 1 linea
//arrow functions con return implicito
// const suma = (a, b) => a + b;
// console.log(suma(2, 5));

const suma = (a, b) => a + b;
console.log(`El resultado de la suma es ${suma(2, 5)}`);

//definir funcion "mostrarLista" con un array con elementos como parametro.
//si la lista esta vacia, mostrar un mensaje "La lista esta vacia"
//si la lista tiene elementos, mostrar cada elemento de la lista en consola
//mostrar la longitud de la lista
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mostrarLista(array) {
    for (const element of array){
        console.log(element);
    }
    if (array.length === 0) {
        console.log("La lista esta vacia");
    }
    return `La longitud de la lista es: ${array.length}`
}

//prueba de lista vacia
let resultado1 = mostrarLista([]);
console.log(resultado1);

//prueba de lista con elementos
let resultado2 = mostrarLista(array);
console.log(resultado2);


