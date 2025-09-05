// let abcd=document.querySelector('#abcd')

// window.addEventListener("mousemove",function(dets){
// abcd.style.top=dets.clientY+"px";
// abcd.style.left=dets.clientX+"px";
// })


window.addEventListener("mousemove", function (e) {
  let spark = document.createElement("div");
  spark.classList.add("spark");

  // Random color (like magic glow)
  spark.style.background = `hsl(${20+Math.random() * 20}, 200%, 50%)`;

  // Position spark on mouse
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";

  document.body.appendChild(spark);

  // Remove after animation
  setTimeout(() => {
    spark.remove();
  }, 60000);
});
