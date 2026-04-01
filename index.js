// Selecting side Navbar, MenuIcon

var sidnav =document.getElementById("sidnav")
var menuicon =document.getElementById("menuicon")
var closenav=document.getElementById("closenav")



menuicon.addEventListener("click",function (){
    sidnav.style.right="0"

})

closenav.addEventListener("click",function(){
    sidnav.style.right="-50%"
})
