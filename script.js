//operadores aritimeticos

var sumTwoNumbers = 5+3
console.log(sumTwoNumbers)

var subTwoNumbers = 13-3
console.log(subTwoNumbers)

var multTwoNumbers = 2*3
console.log(multTwoNumbers)

var divTwoNumbers = 10/5
console.log(divTwoNumbers)

console.log(8%3)


if (sumTwoNumbers==4){
console.log(sumTwoNumbers+subTwoNumbers)
}
else if (sumTwoNumbers!=4 && subTwoNumbers < 8) {
    console.log(subTwoNumbers-multTwoNumbers)
}
else
console.log("Não é numero")

var colors = ["azul","amarelo","rosa","cinza","sem cor"]
for (var i=0; i < colors.length; i++){

    console.log(colors[i]);
}



for (var i = 0; i < 10; i++){
    console.log(i);
}

var i = 0 ;
while (i <10){

    console.log(i)

    i++
}



//funcoes

function sayHello(name){

console.log("hello"+ name)

}

sayHello(" Weslley")

//classes

class Book{

    constructor(title, autor, pages){
        this.title=title;
        this.autor=autor;
        this.pages=pages;
    }

    read(){

    return `Estou lendo ${this.title}`
    }


}

class ITBook extends Book{
    constructor (title, autor, pages, techonoly){
        super(title, autor, pages);
        this.techonoly=techonoly
        
    }
}




let itBook = new ITBook('Algoritimos','Brian','500','Algoritimos');

console.log(itBook
)

//nova classe

class Person{
constructor(name){
    this._name=name;
}


get name(){
    return this._name;
}

set name(value){
    this._name=value;
}

}

let person =new Person ("Weslley");
person.name= 'Wes'
console.log(person.name)

