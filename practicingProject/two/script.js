let age=5;
let gender="male"
let discount=0;

if(age<=5) discount=100;
else if((age>5 && age<=8) || gender==='female') discount=50
else if(age>=65) discount=30


console.log(`You get discount of ${discount} %`)