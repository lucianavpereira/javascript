let num = window.document.querySelector('#fnum')
let lista = window.document.querySelector('select#flista')
let valores = []

let res = window.document.querySelector('#res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false 
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('tudo ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}


