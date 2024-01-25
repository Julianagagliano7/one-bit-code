function exibeMarcas(){
    console.log(this.marca1, this.marca2, this.marca3)
}

const marcas = {
    marca1: 'Nike',
    marca2: 'Adidas',
    marca3: 'Puma'
}

exibeMarcas.call(marcas)