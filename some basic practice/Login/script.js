let main=document.querySelector("#main")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let endtext=document.querySelector("#endtext")

main.addEventListener("submit",function(dets){
dets.preventDefault()
let emailRegrex=/^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
let passwordRegrex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if(!emailRegrex.test(email.value) || !passwordRegrex.test(password.value)){
    endtext.style.display="initial"
   endtext.textContent="Invalid email or password";
   endtext.style.color="red"
   
}else{
     endtext.style.display="none"
    console.log("false")
    console.log(email.value  )
   console.log(password.value)
}

email.value="  "
password.value=" "


})