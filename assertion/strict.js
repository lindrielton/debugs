
let list = [];
let lista2 = [10,20,30,40];

function checaLista(lista){
    if(lista.length == 0){
        throw new Error("a lista não existe")
    }else{
         for(let i = 0; i < lista.length; i++){
            console.log(` a lista ${lista} tem ${lista[i]}`);
         }
    }
}

checaLista(lista2);
checaLista(list);
