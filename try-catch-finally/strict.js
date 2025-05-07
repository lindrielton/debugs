
let b = 1;



try {
    let a = b + c;
    console.log(a);

}catch( error){
     console.log("algo deu errado no codigo ;" + error);

}finally{
    console.log("tudo ok");
}

// indepedente se o codigo der erro ou não ele vai executar 
//mais sempre mostrando um erro
