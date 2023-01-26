




const ImgNumber = {
    1: "img/1.jpg",
    2: "img/2.jpg",
    3: "img/3.jpg",
    4: "img/4.jpg" 
}
    
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

var object=document.getElementById('intro');

function Show () {
    object.style.opacity='1';    
}

function Hide () {
    object.style.opacity='0';
}

document
    .getElementById('project_1')
    .addEventListener("mouseover", Hide );
document
    .getElementById('project_1')
    .addEventListener("mouseout", Show );
document
    .getElementById('project_2')
    .addEventListener("mouseover", Hide );
document
    .getElementById('project_2')
    .addEventListener("mouseout", Show );
document
    .getElementById('project_3')
    .addEventListener("mouseover", Hide );
document
    .getElementById('project_3')
    .addEventListener("mouseout", Show );
document
    .getElementById('project_4')
    .addEventListener("mouseover", Hide );
document
    .getElementById('project_4')
    .addEventListener("mouseout", Show );



