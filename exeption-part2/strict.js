

function saldcao(nome){
    if(typeof nome != "string"){
        throw new Error("palavra não aplicavel");
    }else{
        console.log(`bem vindo ${nome}`)
    }
}

console.log(saldcao('elton'))
console.log(saldcao(10));