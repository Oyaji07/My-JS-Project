


window.addEventListener("mousemove",function(dets){
    let spark=document.createElement("div")
spark.classList.add("spark")

document.body.appendChild(spark);

spark.style.top=dets.clientY+"px";
spark.style.left=dets.clientX+"px";
    spark.style.backgroundColor=`hsl(${30+Math.random()*360},100%,50%)`


    this.setTimeout(()=>{
        spark.remove()
    },2000)
})