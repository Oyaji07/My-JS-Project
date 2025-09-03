
/*...........Check Whether it is even or Odd......................*/

function checkEvenOdd(a){
    return a%2==0?"even":"odd"
    // if(a%2==0){
    //     console.log(a+" is Even")
    // }else{
    //     console.log(a+ " is Odd")
    // }
}

console.log(checkEvenOdd(-2))

/*............Tell me The Smallestb number.............................*/

let smallest =(a,b,c)=>{
if(a>b){
    if(a>c){
        console.log(a+" is greater")
    }else console.log(c+" is greater")
}else{
    if(b>c)console.log(b+" is greater")
    else console.log(c+" is greater")
}
 
}
console.log(smallest(90,15,10))


/*..............Write a Function that return Reverse String..............................*/

let reverseStrings=(str)=>{
    // console.log("||||||||| " +str[0])'
    let arr=str.split("")
    let i=0
    let j=str.length-1
    while(i<=j){
        let temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp
        i++;j--;
    }
    return arr;

}

console.log(typeof(reverseStrings("This is")))
console.log(reverseStrings("Software Development").join(""))