
// debug um cogigo com todos os tipos de debugers

function lista(list){
 let listaa = Number(list);
    if(Number.isNaN(listaa)){
        console.log('a lista não existe');
    }else{
       console.log(list.length);
  }
}

console.log(lista(['oi','tudo','bem']));