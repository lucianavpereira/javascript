function calcular() {
    var num = window.document.querySelector('#num')
    var nump = Number(num)
    var tb = window.document.getElementsByClassName('.opt')
    var tbp = Number(tb)
    var calc = Number(tbp * nump)
    var res = window.document.querySelector('#res')

    if (tb >= 0 && tb <= 10) {
        while (tb >= 0 && tb <= 10) {
            var calc = tbp*nump
            tb++
        
        }
    }
    res.innerHTML = (`A tabuada de  ${tbp} x ${nump} = ${calc}`)


    






}