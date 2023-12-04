
const headerDivs = document.querySelectorAll('.menu-item');

//header button list, to control the active icon
const headerButtons = document.querySelectorAll('.header-icon');
let state = 2;

//boolean variable, for show hide div, accountDiv and postDiv
let showHide = false;

window.addEventListener('click', function(){
    showOrHide(false, accountDiv);
    showOrHide(false, postDiv);
});

//set the default display to none for account and post div
const accountDiv = document.querySelector('.account');
const postDiv = document.querySelector('.post');
showOrHide(showHide, accountDiv);
showOrHide(showHide, postDiv);

//display the post or account div, if one gets clicked
document.getElementById('4').addEventListener('click', function(event){
    event.stopPropagation();
    showHide = !showHide;
    showOrHide(showHide, accountDiv); 
});

document.querySelector('.new-post-button').addEventListener('click', function(event){
    event.stopPropagation();
    showHide = !showHide;
    showOrHide(showHide, postDiv);
});

document.querySelector('.account').addEventListener('click', function(event){
    event.stopPropagation();
});

document.querySelector('.post').addEventListener('click', function(event){
    event.stopPropagation();
});

//add a zoom animation for overview item, if they get over hovered
const overviewItems = document.querySelectorAll('.item');
overviewItems.forEach(overviewItem => {
    overviewItem.addEventListener('mouseenter', function(){
        this.style.transform = "scale(1.03)";
    });
    overviewItem.addEventListener('mouseleave', function(){
        this.style.transform = "scale(1)";
    });
});

//add the event listener to the different header buttons
const buffer = ['0', '0'];
headerButtons.forEach(headerButton => {
    headerButton.addEventListener('click', InverseIcon);
});

//Add the hover event for the header icons
headerDivs.forEach(headerDiv => {
    headerDiv.addEventListener('mouseenter', function(){
        this.classList.add('hovered');
    });
    headerDiv.addEventListener('mouseleave', function(){
        this.classList.remove('hovered');
    });
});


//implemented the inversion function
function InverseIcon(){

    //store the preveous button clicked 
    buffer.push(this.id);
    buffer.shift();
    state = 1;

    //store the src attribute of the current button
    let currentSrc = this.src.substring(21, this.src.length - 5);
    let itemClicked = document.getElementById(this.id + this.id);
    //Change the button clicked
    this.setAttribute('src', currentSrc +  `${state}.png`);
    itemClicked.classList.add('border-bottom');
    // this.classList.add('border-bottom');

    //retrieve the last button clicked
    const lastClicked = document.getElementById(buffer[0]);
    const lastSrc = lastClicked.src.substring(21, lastClicked.src.length - 5);
    
    //Reset the preveous button only if it's different from the current one 
    if( lastSrc !== currentSrc){
        itemClicked.classList.remove('border-bottom');
        lastClicked.setAttribute('src', lastSrc + '2.png');
    }else{
        //nothing
    }
}

//impleted the show or hide function for the account and post div
function showOrHide(showHide, element){

    if(showHide === false){
        element.classList.add('hidden');
    }else{
        element.classList.remove('hidden');
    }

}



