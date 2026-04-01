var menuicon =document.getElementById("menuicon")
var sidnav =document.getElementById("sidnav")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidnav.style.right="0"
})

sidnav.addEventListener("click",function(){
    sidnav.style.right="-50%"

})