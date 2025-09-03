let obj={id:101,name:"Danel",age:78};

//.......................This create new Object 
let emp=new Object()
emp.id=513
emp.company="Tata"
emp.networth="140bn"

//Creating Object with Function
function empl(i,n,age){
    this.i=i
    this.n=n;
    this.age=age
}
//...........The upper Function 
const e= new empl(104,"Rose" ,67)
//........The upper object create new object with empty space like emp done upper after that assign the value with the help of 
//........This 

console.log(emp)
console.log(obj)
