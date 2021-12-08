//detexter lorsqu'on scrol//
window.onscroll = function() {sticky()}


//recuperer les elements//
let header = document.getElementById('sticky-header')
let stickycomponent = header.offsetTop

//faire la fonction//
function sticky () {
     if ( window.pageYOffset > stickycomponent){
         header.classList.add("sticky")
     }
     else{
        header.classList.remove("sticky")
     }
}
