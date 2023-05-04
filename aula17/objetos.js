// ANLISANDO typeof

// let num = [3, 8, 10, 5]
// console.log(typeof(num))




// let amigo = {nome:"José", sexo:'M', peso:85.4, engordar(p){}}

// console.log(typeof(amigo))
// console.log(amigo)



let amigo = {nome:"José", sexo:'M', peso:85.4, engordar(p=0){
    console.log(`Engordou ${p} kg`)
    this.peso += p
}}
amigo.engordar(2)
console.log(`Agora ${amigo.nome} pesa ${amigo.peso} kg`)