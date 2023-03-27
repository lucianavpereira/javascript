function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var nasceu = window.document.querySelector('#nasc')
    var anonas = Number(nasceu.value)
    var res = window.document.querySelector('#resul')
       
    if (anonas == 0 || anonas > ano) {
        // window.alert('[ERRO] Ano inválido.')
        res.innerHTML = ('[ERRO] Ano inválido.')
    } else {
        var pessoa = window.document.getElementsByName('gene')
        var idade = ano - anonas
        var genero = ''
        var imagem = window.document.querySelector('#foto')

        if (pessoa[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <12){
                //criança
                imagem.src = 'menina.png'
            } else if (idade >= 12 && idade < 21) {
                //jovem
                imagem.src = 'jovemadulta.png'
            } else if (idade < 60) {
                //adulto
                imagem.src = 'adulta.png'
            } else {
                //idoso
                imagem.src = 'idosa.png'
            }
        } else if (pessoa[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <12){
                //criança
                imagem.src = 'menino.png'
            } else if (idade >= 12 && idade < 21) {
                //jovem
                imagem.src = 'jovemadulto.png'
            } else if (idade < 60) {
                //adulto
                imagem.src = 'adulto.png'
            } else {
                //idoso
                imagem.src = 'idoso.png'
            }
        }
        res.innerHTML = `É ${genero} com ${idade} anos!`
        res.innerHTML = `É ${genero} com ${idade} anos!`
    } 
    
    
}

