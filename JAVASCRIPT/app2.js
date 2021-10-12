// SET UP VARIABLES TO TARGET AND STYLE HTML ELEMENTS
const fullScreen = document.querySelector('.full-screen');
const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelectorAll('.gallery img');
const delIcon = document.querySelector('#del-icon');
const expandImg = document.querySelector('.full-screen img');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');


// INITIALIZING AN OBJECT AND A COUNT TO STORE EACH SRC UNIQULEY WITH A COUNT VALUE. 
// Initiallizing object ad count
let allImgSrc = {};
let count = 0;


galleryImage.forEach((img) => {

    img.addEventListener('click', onClick);
    function onClick() {
        // Display the particular clicked image in a wider screen.
        fullScreen.style.visibility = 'visible';
        expandImg.src = img.src;

        // Store each src uniquly with a count vlaue.
        for (let item of galleryImage) {

            // Annexing count with each src for uniqueness
            allImgSrc[`${item.src} ${count}`] = count;
            count ++;
        }    
        
        // RESET THE COUNT
        count = 0;
    } 

});




// FUNCTION TO REMOVE THE WIDER SCREEN
delIcon.addEventListener('click', remove);
function remove() {
    fullScreen.style.visibility = 'hidden';
}



// FUNCTION TO MOVE ONE OR MORE IMAGE FORWARD
// Intiallizing an empty array to store src separately away from the count which is annexed with it.
let splitSrc = [];

rightArrow.addEventListener('click', rightForward);
function rightForward(e) {
    // Reset the opacity of the left Arrow
    leftArrow.style.opacity = 1;

    // Src of the current img in the wider screen
    const currentImg = e.target.parentElement.firstElementChild.src;
    
    // Get all keys out of the object
    const allSrc = Object.keys(allImgSrc);

    // Iterating each src and removing the annexed count in each of it.
    allSrc.forEach((src) => {
        const eachSrc = src.split(" ");

        // joining the src without the count to the array.
        splitSrc.push(eachSrc[0]);
    });

    // Getting the current index of the image that is in the wider screen.
    const currentIndex = splitSrc.indexOf(`${currentImg}`);
    // Next index
    const nextIndex =currentIndex + 1;
    // Preview the of the next image in the wider screen. 
    expandImg.src = splitSrc[nextIndex];


    // TESTING
    

    
}


// FUNCTION TO MOVE ONE OR MORE IMAGE BACKWARD
// Here the same procedure as for the right arrow is maintained.(Some minor changes in variables has been done)
leftArrow.addEventListener('click', leftForward);
function leftForward(e) {
    const currentImg = e.target.parentElement.firstElementChild.src;
    
    const allSrc = Object.keys(allImgSrc);
    allSrc.forEach((src) => {
        const eachSrc = src.split(" ");
        splitSrc.push(eachSrc[0]);
    });

    const currentIndex = splitSrc.indexOf(`${currentImg}`);
    const prevIndex = currentIndex - 1;

    if(prevIndex >= 0) {
        expandImg.src = splitSrc[prevIndex];
    }else{
        leftArrow.style.opacity = 0.5;
    }
    
}


