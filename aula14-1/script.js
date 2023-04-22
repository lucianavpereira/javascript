function contar() {
    var inicio = Number(window.document.querySelector('#inicio').value)
    var final = Number(window.document.querySelector('#fim').value)
    var passo = Number(window.document.querySelector('#pulo').value)

    var res = window.document.querySelector('#res')

    if (inicio <= 0) {
        window.alert('Valor inválido!')
        } else if (final <= 0) {
            window.alert('Valor inválido!')
        } else if (passo <= 0) {
            window.alert('Valor inválido!')    
        } else if (inicio >= 1) {
            while (inicio <= final){
                inicio++
            }            
           
        }

        res.innerHTML = (`Contando...  ${  inicio}`)           
       
}