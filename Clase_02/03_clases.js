class Auto {
    constructor(color, marca){
    this.color = color;
    this.marca = marca; 
    }
    //metodo
    frenar(){
        return 'se frena el auto'
    }
    acelerar(){
        return `se acelera el auto de color: ${this.color} y marca: ${this.marca}`
    }
}

//instanciar la clase
const auto1 = new Auto('negro', 'peugeot');
const auto2 = new Auto('azul', 'ford');

console.log(auto1);
console.log(auto2)

//aplicar metodo
console.log(auto1.acelerar());
console.log(auto2.frenar());