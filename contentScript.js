var elementAll = document.getElementsByTagName("*")
for(var i = 0; i < elementAll.length; i++) {
    elementAll[i].addEventListener('copy',function(e){e.stopPropagation()},true)
}