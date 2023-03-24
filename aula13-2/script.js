function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var nasceu = window.document.querySelector('#nasc')
    // var idadeatual = Number(ano.value)
    var anonas = Number(nasceu.value)
    var idade = ano - anonas
    var pessoa = window.document.querySelector('#foto')
    var femi = window.document.querySelector('#fem')
    var macu = window.document.querySelector('#mas')
    
    var res = window.document.querySelector('#resul')
    res.innerHTML = (`Sua idade é ${idade} anos!!! :)`)


    if (anonas == 0 || anonas > ano) {
        // window.alert('[ERRO] Ano inválido.')
        res.innerHTML = ('[ERRO] Ano inválido.')
    } else if (ano - 12 > anonas && femi) {
        pessoa.src = 'menina.png' 
        
    } 
    
    
}

