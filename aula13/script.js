function carregar() {
    var dia = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 13
    dia.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        // Bom dia
        foto.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        foto.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        foto.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }

}