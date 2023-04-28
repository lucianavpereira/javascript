// let num = [5, 3, 8, 1, 6]
// num.push(7)
// num.sort()
// console.log(num)
// console.log(`O vetor tem ${num.length} posições.`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)


    // FORMA PADRÃO DE EXECUTAR E MOSTRAR O RESULTADO NA TELA #
// let valores = [8, 1, 7, 4, 2, 9]

// console.log(valores)



    //  FORMA DE EXECUTAR E MOSTRAR O RESULTADO USANDO UMA ESTRUTURA DE REPETIÇÃO 
// let valores = [8, 1, 7, 2, 9, 4]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }


//     //  FORMA MAIS SIMPLIFICADA DE USAR O FOR - for in
// let valores = [8, 1, 7, 2, 9, 4]
// valores.sort()

// for (let pos in valores) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }


    //   BUSCANDO UM VALOR NO VETOR

var num = [9, 4, 1, 5, 3]
console.log(num)
var pos = num.indexOf(2)
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor  está na posição ${pos}`)
}

