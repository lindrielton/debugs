
function verificador(num){
   if(typeof num === "string"){
      throw new Error('Erro: o valor é invalido');
   }else if (num % 2 ===0){
      return 'numero par';
     
   }
}

console.log(verificador(10));
console.log(verificador(20));


console.log(verificador('elton'));



