var menuToggle = documentq.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuTOggle.addEventListener("click", frunction(){
    // forEach is not supported in IE11
// activeEleemtns.forEach(function(e){
//  e.classList.toggle("active");
//});
    for(var activated = 0; < acticeElements.length; activated++){
        activeElements[activated].classList.toggle("active");
    }
}

