/* const {soma, areaCirculo, PI} = require('./moduloA') // desestruturação

console.log("Area do circulo (r = 2): "+areaCirculo(2))
console.log(PI) */
/* const moduloA = require('./moduloA')

console.log(moduloA)
console.log(moduloA.nome)
console.log(moduloA.idade)
console.log(moduloA.cidade)

 */

const moduloA = require('./moduloA')

moduloA.map(
    (item)=>{
        console.log(item.time)
    }
)