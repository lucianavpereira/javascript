//  O uso do comando 
//     break   é obrigatório.

// Dias da Semana, para JS:

        //   0 = Domingo
        //   1 = Segunda
        //   2 = Terça
        //   3 = Quarta
        //   4 = Quinta 
        //   5 = Sexta 
        //   6 = Sábado



// switch (expressao) {
//     case 1:
//         bloco
//         break
//     case 2:
//         bloco
//         break
//     case 3:
//         bloco
//         break
//     default:
//         break
// }


var semana = new Date()
var diaSem = semana.getDay()
// console.log(diaSem)

switch (diaSem) {
    case 0: 
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}