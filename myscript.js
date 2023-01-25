const ImgNumber = {
    1: "img/1.jpg",
    2: "img/2.jpg",
    3: "img/3.jpg", }
    

function setFigureProperties(imgNumber) {
    let figure = document.getElementById("hoverImageContainer");
    figure.style.display = "block";
    let img = document.getElementById("hoverImage");
    img.src = ImgNumber[imgNumber];
    let caption = document.getElementById("caption");
    caption.textContent = imgCaption;
    
    
}
function hideImage(){
    let figure = document.getElementById("hoverImageContainer");
    figure.style.display = "none";
}






