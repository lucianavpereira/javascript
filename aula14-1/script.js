function contar() {
    var inicio = Number(window.document.querySelector('#inicio').value)
    var final = Number(window.document.querySelector('#fim').value)
    var passo = Number(window.document.querySelector('#pulo').value)
    var res = window.document.querySelector('#res')

    if (inicio <= 0 || final <= 0) {
        window.alert('[ERRO]Valor inválido!')
    } else {
            res.innerHTML = 'Contando....  <br>'
            if (passo <= 0) {
                window.alert('Passo não informado! Considerando Passo 1.')
                passo = 1
            }
            if(inicio <= final) {
            // contagem crescente
            for(var c = inicio; c <= final; c += passo){
                res.innerHTML += `   ${c}  \u{1F603}`
            }
        } else {
            //contagem regressiva
            for(var c = inicio; c >= final; c -= passo){
                res.innerHTML += `   ${c}  \u{1F603}`
            }           
        }
        res.innerHTML += `  \u{1F3C1}`        
    }   
}