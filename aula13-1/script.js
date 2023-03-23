function carregar() {
    var dia = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 16
    dia.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        // Bom dia
        foto.src = 'fotomanha.png'
        document.body.style.background = '#FFE500'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        foto.src = 'fototarde.png'
        document.body.style.background = '#CC8D1A'
    } else {
        // Boa noite
        foto.src = 'fotonoite.png'
        document.body.style.background = '#01153D'
    }

}