function calcular() {
    var num = Number(window.document.querySelector('#num').value)
    var res = window.document.querySelector('#tabuada')
    res.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
        var item = document.createElement('option') 
        item.text = `${num} X ${c} = ${num*c}`
        // item.value = `res${c}`
        res.appendChild(item)
    }
}