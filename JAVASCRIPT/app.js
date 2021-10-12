const fullScreen = document.querySelector('.full-screen');
const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelectorAll('.gallery img');
const delIcon = document.querySelector('#del-icon');
const expandImg = document.querySelector('.full-screen img');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');

let allImgSrc = {};
let count = 0;


galleryImage.forEach((img) => {

    img.addEventListener('click', onClick);
    function onClick() {

        fullScreen.style.visibility = 'visible';
        expandImg.src = img.src;

        for (let item of galleryImage) {
            allImgSrc[item.src] = count;
            count ++;
        }
        count = 0;
    } 

});

delIcon.addEventListener('click', remove);
function remove() {
    fullScreen.style.visibility = 'hidden';
}



rightArrow.addEventListener('click', rightForward);
function rightForward(e) {
    leftArrow.style.opacity = 1;
    const currentImg = e.target.parentElement.firstElementChild.src;
    const nextIndex = allImgSrc[currentImg] + 1;

    if (nextIndex <= galleryImage.length - 1) {
        expandImg.src = Object.keys(allImgSrc)[nextIndex];
    }else {
        rightArrow.style.opacity = 0.5;
    }
    

}


leftArrow.addEventListener('click', leftForward);
function leftForward(e) {
    rightArrow.style.opacity = 1;
    const currentImg = e.target.parentElement.firstElementChild.src;
    const prevIndex = allImgSrc[currentImg] - 1;

    if (prevIndex >= 0) {
        expandImg.src = Object.keys(allImgSrc)[prevIndex];
    }else {
        leftArrow.style.opacity = 0.5;
    }
    
}

