
function checarNumero(num){
   let numero = Number(num);
   if (Number.isNaN(numero)){
     return false
   }else{
        return numero;
   }
}


console.log(checarNumero('oi'))
console.log(checarNumero(28));

