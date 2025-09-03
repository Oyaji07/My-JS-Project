//.........................Odd Even..............................

let a=10;

function oddEven(a){
    if(a%2==0) return `${a} number is Even`;
    else return `${a} number is Odd`
}
console.log(oddEven(a));



//......................Celcius To Fahreneit.......................

let celcius=280;

function toFahreneit(inDegree){
    let Fahreneit=(9/5)*inDegree+32
    return Fahreneit;
}
console.log(toFahreneit(celcius));


//.......................Maximum number among two ................

let num1=50;
let num2=75;
function maximunNum(num1,num2){
    return num1>num2?num1:num2
}
console.log(maximunNum(num1,num2));