var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var btns=document.querySelectorAll(".button")

btns.forEach(function(thing){
    thing.onclick=function(){
        alert("text sent")
    }
})
