function verificar () {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = document.querySelector('#nasc')
    var res = document.querySelector('#resul')
    
    if (ano_nasc.value == 0 || Number(ano_nasc.value) > ano_atual) {
        window.alert('[ERRO] Ano inválido!!')
    } else {
        var sex = document.getElementsByName('gene')
        var idade = ano_atual - Number(ano_nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (sex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemadulta.png')
            } else if (idade < 60) {
                //adulto

            } else {
                //idoso

            }
        } else if (sex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <12) {
                //criança

            } else if (idade < 21) {
                //jovem

            } else if (idade < 60) {
                //adulto

            } else {
                //idoso

            }
            
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!!`
        res.appendChild(img)

        
    }
    
}
