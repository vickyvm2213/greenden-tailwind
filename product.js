var menuicon = document.getElementById("menuicon")
var sidnav = document.getElementById("sidnav")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidnav.style.right = "0"
})

sidnav.addEventListener("click", function () {
    sidnav.style.right = "-50%"

})

// product search functionality

var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")


search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count<productlist.length; count=count + 1) {

        var productname = productlist[count].querySelector("h1").textContent


        if(productname.toUpperCase().indexOf(enteredvalue)<0){


            productlist[count].style.display ="none"

        }
        else {
            productlist[count].style.display ="block"
        }
    }

})  