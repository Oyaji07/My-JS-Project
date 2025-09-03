function greet(){
    console.log("Hello there !!")
}
greet()

function sqr(x){
    console.log(x)
    return x*x
}
let temp=sqr(8);



//imediately invoke function
(function toWorld(){
    console.log("this is time for you!!")
})();