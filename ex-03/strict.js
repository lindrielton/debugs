
// debug um cogigo com todos os tipos de debugers

function lista(list){
    if(list.length === 0){
        throw new Error('a lista não existe');
    }else{
      console.log(list.length);
    }
   
  
}

console.log(lista([]));