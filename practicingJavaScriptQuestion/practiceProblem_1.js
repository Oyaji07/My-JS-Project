// console.log("Hello")

//function sum(a,b){
   // let sum=a+b;
//console.log("Sum is ",a+b)
//}
//sum(8,9)

(function areaOf(a,b){
    if(a*b<=0){
        throw new RangeError("Area should not in negative or zero")
    }
console.log("Area of rectangle is ",a*b)
})(0,1);
