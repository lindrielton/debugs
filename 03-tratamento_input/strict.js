
function checarNumero(num){
    let number =  Number(num);
    if (Number.isNaN(number)){
       console.log('o valor informado não é um numero!');   
    }else{
        return number;
    }

}


console.log(checarNumero(20))

