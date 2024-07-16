/* 
function nomeFuncao(par){
}

const funcao = nomeFuncao()

const array = ["string", 12132132, true, funcao];

console.log(array);

const numeros = [1, 2, 3, 4]
numeros.push(5)

numeros.map(
    (item) => {
        console.log(item)
    }
)

console.log(numeros.filter((item)=>item != 2))
 */

/* const pessoa = {
    nome: "João",
    idade: 25,
    profissao: "arquiteto",
    saudacao: function(){console.log("Oi mundo")}
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['profissao'])

delete pessoa.profissao
pessoa.saudacao()
 */

/* for(let i=0; i <= 5; i++){
    if (i == 2){
        continue
    }
    console.log(i)
    if (i == 3){
        break
    }
} */

/* let i=0;
while(i<5){
    console.log(i)
} */

/* let i = 0
do{
    console.log(i);
    i++
}while( i <= 5 )  */

/* const pessoas =[
    {
        nome: "Euclides",
        idade: 22,
        profissao: "Analista de sistemas"
    },
    {
        nome: "Linton",
        idade: 35,
        profissao: "Analista de sistemas"
    },
    {
        nome: "Adriana",
        idade: 20,
        profissao: "Analista de sistemas"
    },
    {
        nome: "Francisco",
        idade: 27,
        profissao: "Analista de sistemas"
    }
] */

/* for(let c=0; c < pessoas.length; c++){
    if(pessoas[c].idade > 22){
        console.log(pessoas[c].nome," - ", pessoas[c].profissao);
    }
} */

/* pessoas.map((pessoa)=>{
    if(pessoa.idade>22){
        console.log(pessoa)
    }
}) */

/* const testePessoas = pessoas.filter((pessoa)=>pessoa.nome != "Euclides")
console.log(testePessoas) */

/* let a = ['a', 'b', 'c', 'b']
s = a.slice(0,2)
console.log(s) */

/* var arr = ['Aula 3', 'Aula 2', 'Aula 1'];
arr.push("Aula 4")

console.log(arr)
arr.sort()
console.log(arr)

console.log(arr.pop());
console.log(arr.shift())
console.log(arr)  */

/* var arr = [1,2,3,4,5,6,7,8,9]
const found = arr.find((e)=> e > 3)
console.log(found) */

/* 
{var arr = ['a', 'b', 'c', 'b']
var arr2 = ['a', 'a', 'a', 'a']

console.log(arr.find((e) => e === 'b'))
console.log(arr.findIndex((e) => e === 'c'))
console.log(arr.indexOf('b'))
console.log(arr.some((e) => e === 'c'))
console.log(arr.every((e) => e === 'a'))
console.log(arr2.every((e) => e === 'a'))
console.log(arr.includes("a"))}
 */