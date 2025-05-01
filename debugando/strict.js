
let a = 1;
let b = 2;
let c = 5;

if(a < 2){
    a = b + c;
    console.log(a);
}

for(let i = 0; i < c ; i++){
    a++;
    a = (b + c )* 2;
    console.log(a);
}

if(b == a){
    a++;
    console.log(a);

}else{
    a = a + b + c;
    console.log(a);
}

a = a + b + c + b;
console.log(a);
