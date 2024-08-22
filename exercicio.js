//A classe Abstração

function Animal(nome,){
    this.nome = nome
}

//Duas classes que são herdeiras da classe anterior

function Granja(nome,som ){
    Animal.call(this,nome)
    this.som = som
    this.fazerSom = function(){
        console.log(`${this.nome}, está dizendo ${this.som}`);
    }
}

function Domestico(nome,raca,som ){
    Animal.call(this,nome)
    this.som = som
    this.raca = raca
    this.fazerSom = function(){
        console.log(`${this.nome}, o ${raca} fez ${this.som}`);
    }
}


//7 instâncias de objetos 

const animal1= new Granja('Pintinho','Piu')
const animal2= new Granja('Galinha',"Co")
const animal3 = new Granja('Galo','Cocoricó')
const animal4 = new Granja('Peru','GuluGulu')
const animal5 = new Granja('Capote','Totac')
const animal6 = new Domestico('Carlos','Gato','Miau')
const animal7 = new Domestico('Roberval','Cachorro','Auau')


animal1.fazerSom();
animal2.fazerSom();
animal3.fazerSom();
animal4.fazerSom();
animal5.fazerSom();
animal6.fazerSom();
animal7.fazerSom();
