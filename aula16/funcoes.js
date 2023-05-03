// function parimpar(n) {
//     if (n % 2 == 0){
//         return 'PAR'
//     } else {
//         return 'ÍMPAR'
//     }
// }

// let res = parimpar(11)
// console.log(res)



// function soma(n1, n2) {
//     return n1 + n2
// } 
// console.log(soma(34, 5))



// function soma(n1=0, n2=0) {
//     return n1 + n2
// } 
// console.log(soma(34))




// let valor = function (x) {
//     return x*2
// }
// console.log(valor(5))



// Calcular o FATORIAL de  5! = 5 x 4 x 3 x 2 x 1 = 120  -  Forma Tradicional

// function fatorial(n) {
//     let fat = 1
//     for(let contador = n; contador > 1; contador--) {
//     fat *= contador
//     }
//     return fat
// }
// console.log(fatorial(5))




//  Calcular o FATORIAL de Forma RECURSIVA 
    // 5! = 5 x 4 x 3 x 2 x 1
    // 5! = 5 x 4!

    // n! = n x (n - 1)!

    // a não ser que:

    // 1! = 1

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))
