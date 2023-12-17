
const body = document.getElementById('body');

// body.classList.remove('overflow-hidden');

const newPost = document.querySelectorAll('.newPost');
const startPostButton = document.getElementById('startPost');
document.querySelector('.postForm').addEventListener('click', event => event.stopPropagation());

const accountIcon = document.querySelector('.account');
document.querySelector('.accountDiv').addEventListener('click', event => event.stopPropagation());

// newPost.forEach(function(newPost){
//     newPost.classList.add('hidden');
// });

let startPost;

function display(state){
    let displayPost;
    if(state === true){
        newPost.forEach(function(newPost){
            newPost.classList.remove('hidden');
        });
        body.classList.add('overflow-hidden');
    }else{
        newPost.forEach(function(newPost){
            newPost.classList.add('hidden');
        });
        body.classList.remove('overflow-hidden');
    }
}

startPostButton.addEventListener('click', function(event){
    event.stopPropagation();
    startPost = true;
    display(startPost);
});

accountIcon.addEventListener('click', function(event){
    event.stopPropagation();
    document.querySelector('.accountDiv').classList.remove('hidden');
});

window.addEventListener('click', function(){
    startPost = false;
    display(startPost);
    document.querySelector('.accountDiv').classList.add('hidden');
});







