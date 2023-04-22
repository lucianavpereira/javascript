function contar() {
    var inicio = Number(window.document.querySelector('#inicio').value)
    var final = Number(window.document.querySelector('#fim').value)
    var passo = Number(window.document.querySelector('#pulo').value)

    var res = window.document.querySelector('#res')

    if (inicio <= 0 || final <= 0 || passo <=0) {
        window.alert('Valor inválido!')
        } else {
        for(var c = inicio; c <= final; c += passo){
            res.innerHTML += `   ${c}`
        }
        }


                  
       
}