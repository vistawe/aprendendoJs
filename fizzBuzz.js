//FizzBuzz
//Divisivel por 3 => Fizz
//Divisivel por 5 => buzz
//Divisivel por 3 e 5 => Fizzbuzz
//Se não for um numero => Não é um numero
//Se não for divisivel por 3 e nem por 5  => entrada

let resultado = fizzBuzz(15);
console.log(resultado)


function fizzBuzz(entrada){

if (typeof entrada != 'number'){

return 'não é um número';

}
if ((entrada % 3 === 0 ) && (entrada % 5 === 0)){
    return 'FizzBuzz';
}

if (entrada % 3 === 0 ){

    return 'Fizz';
}

if (entrada % 5 === 0 ){
    return 'Buzz'
}

return entrada




}

   