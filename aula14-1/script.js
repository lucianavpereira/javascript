function contar() {
    var inicio = Number(window.document.querySelector('#inicio').value)
    var final = window.document.querySelector('#fim').value
    var passo = window.document.querySelector('#pulo').value
    
    var fim = Number(final)
    var pulo = Number(passo)

    var res = window.document.querySelector('#res')

    if (inicio < 2) {
        window.alert('Valor inválido!')
        // res.innerHTML = ('valor inválido')

    } else {
        res.innerHTML = ('valor válido')
    }
        
    
    
}