const carro = {
    modelo: 'Fiatzão',
    velocidade: 0,
    acelerar: function (){
        this.velocidade = +10
    }
};


carro.acelerar();
console.log(carro.velocidade)