var changeImage = document.getElementsByTagName("img")
for(let i=0;i < changeImage. length;i++){
    changeImage[i].addEventListener("mouseover",function(){
        for(let j=0;j < changeImage.length;j++){
            changeImage[j].src = "images/image"+ (j+1)+"_2.jpg";
        }
    })
}
for(let i=0;i < changeImage. length;i++){
    changeImage[i].addEventListener("mouseleave",function(){
        for(let j=0;j < changeImage.length;j++){
            changeImage[j].src = "images/image"+ (j+1)+".jpg";
        }
    })
}