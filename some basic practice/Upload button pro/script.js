let fileh=document.querySelector(`#fileh`);

let mainFile=document.querySelector(`#mainFile`);

fileh.addEventListener("click",function(vals){
mainFile.click(); 
// console.log(vals)
})

mainFile.addEventListener("change",function(vals){
    let File=vals.target.files[0];
    if(File){
   fileh.innerText=` ${vals.target.files[0].name} `
    }

    // console.log(vals)
})



//    ✅ Uploaded