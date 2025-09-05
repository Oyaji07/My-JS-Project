let Form=document.querySelector(`#Form`)
let inputs=document.querySelectorAll("input")

Form.addEventListener("submit",function(vals){
     vals.preventDefault();
   console.log(inputs[0]);
   
    // console.log(inputs[0].value);
   
let Card=document.createElement('div')
Card.classList.add('Card')
let profileAndName=document.createElement('div')
profileAndName.classList.add('profileAndName')
let profile=document.createElement('div')
profile.classList.add('profile')

let img= document.createElement('img')
img.setAttribute('src',inputs[4].value)

profile.appendChild(img)

let upperh=document.createElement('div')
upperh.classList.add('upperh')

let h2=document.createElement('h2')
h2.textContent=inputs[0].value
let h5=document.createElement('h5')
h5.innerText=inputs[1].value
console.log(inputs[1].value)
let h6=document.createElement('h6')
h6.textContent=inputs[2].value
let p=document.createElement('p')
p.textContent=inputs[3].value
upperh.appendChild(h5)
upperh.appendChild(h6)




profileAndName.appendChild(profile)
profileAndName.appendChild(upperh)

Card.appendChild(profileAndName)
Card.appendChild(h2)
Card.appendChild(p)

document.body.appendChild(Card)
 inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });

 })
 
