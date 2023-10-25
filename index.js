const headerButtons = document.querySelectorAll('.menu-item img');
let state = 2;

document.getElementById('4').addEventListener('click', function(){
    document.querySelector('.account').classList.toggle('hidden');
});

document.querySelector('.new-post-button').addEventListener('click', function(){
    document.querySelector('.post').classList.toggle('hidden');
});

const overviewItems = document.querySelectorAll('.item');

overviewItems.forEach(overviewItem => {
    overviewItem.addEventListener('mouseenter', function(){
        this.style.transform = "scale(1.1)";
    });
    overviewItem.addEventListener('mouseleave', function(){
        this.style.transform = "scale(1)";
    });
});

const buffer = ['0', '0'];
headerButtons.forEach(headerButton => {
    headerButton.addEventListener('click', InverseIcon);
});

function InverseIcon(){

    //store the preveous button clicked 
    buffer.push(this.id);
    buffer.shift();
    state = 1;

    //store the src attribute of the current button
    let currentSrc = this.src.substring(21, this.src.length - 5);
    
    //Change the button clicked
    this.setAttribute('src', currentSrc +  `${state}.png`);

    //retrieve the last button clicked
    const lastClicked = document.getElementById(buffer[0]);
    const lastSrc = lastClicked.src.substring(21, lastClicked.src.length - 5);
    
    //Reset the preveous button only if it's different from the current one 
    if( lastSrc !== currentSrc){
        lastClicked.setAttribute('src', lastSrc + '2.png');
    }else{
        //nothing
    }

}



