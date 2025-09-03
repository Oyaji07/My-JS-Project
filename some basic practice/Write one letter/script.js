// let select=document.querySelector("#product")
// let topic=document.querySelector('#topic')
// select.addEventListener("change",function(val){
//     topic.textContent=`✅ Selected`
//     console.log(val.target.value)
// })

let topic=document.querySelector('#topic')
window.addEventListener("keydown",function(vals){
    console.log(vals)
     if(vals.code==="Space"){
    topic.textContent=`Spc`
    }
    else if(vals.key===`AltLeft` || vals.key===`AltRight`){
          topic.textContent=`alt`
    }
    else{
   topic.textContent=vals.key;
    }
    
})