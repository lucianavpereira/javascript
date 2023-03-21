// var hora = 2
// // console.log (hora)
// if (hora >= 6 &&  hora < 12) {
//     // console.log(hora)
//     console.log(`São ${hora} horas. Bom dia!!`)
// } else if (hora >= 12 && hora < 18) {
//     // console.log(hora)
//     console.log(`São ${hora} horas. Boa tarde!!`)
// } else if (hora >= 18) {
//     console.log(`São ${hora} horas. Boa noite!!`)
// } else if (hora >= 0 && hora < 6) {
//     console.log(`São ${hora} horas. Bons sonhos!!`)
// }


var relogio = new Date()
var hora = relogio.getHours()
    console.log(`São ${hora} horas.`)
if (hora < 6 && hora >= 0) {
    console.log('Bons sonhos!!')    
} else if (hora < 12) {
    console.log(`Bom dia!!`)
} else if (hora < 18) {
    console.log(`Boa tarde!!`)
} else {
    console.log('Boa noite!!')
}

