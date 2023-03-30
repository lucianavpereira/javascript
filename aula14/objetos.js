// const teste = ['Luciana','Edson']

// console.log(teste)

// teste.pop()
// console.log(teste)


let palio = {
    cor:  'azul', 
    marca: 'fiat',
    modelo: 'palio',
    andando: false,
    velocidade: 0,
    buzinar() {
        return 'bibi'
    },
    andar(kmh) {
        palio.andando = true
        palio.velocidade = kmh
        return `o carro está andando a ${palio.velocidade} km/h`  
    },
    parar() {
        if (palio.andando == true) {
            palio.andando = false
            palio.velocidade = 0
            return 'o carro parou'
        } 
        return 'o carro já está parado'
        
    }
}
console.log(palio.andando)
console.log(palio.andar(60))
console.log(palio.andando)
console.log(palio.parar())
console.log(palio.andando)
console.log(Number(palio.velocidade))
console.log(palio.parar())
