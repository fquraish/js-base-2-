var erase = document.getElementsByTagName("input")
var btnElement = document.getElementsByName("button")[0]

btnElement.addEventListener("click",function(){
    for (let i=0; i < erase.length;i++){
        erase[i].value=""
    }
})