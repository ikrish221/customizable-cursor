var container = document.querySelector("#container")
var names= document.querySelector(".name")

container.addEventListener("mousemove",function(dets){
	names.style.left= dets.x+"px";
	names.style.top= dets.y+"px";
})
