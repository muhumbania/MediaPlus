const postButton = document.getElementById('postButton');
const postContent = document.getElementById('postContent');
const accountIcon = document.querySelector('.account');
const startPostButton = document.getElementById('startPost');
const accountDiv = document.querySelector('.accountDiv');
const postDiv = document.querySelector('.newPost');
const curtain = document.querySelector('.curtain');
const postForm = document.querySelector('.postForm');
let displayAccount = false;
let displayPost = false;

window.addEventListener('click', function(){
    accountDiv.classList.add('hidden');
    postDiv.classList.add('hidden');
    curtain.classList.add('hidden');
    displayAccount = false;
    displayPost = false;
});

accountDiv.addEventListener('click', function(event){
    event.stopPropagation();
});

postForm.addEventListener('click', function(event){
    event.stopPropagation();
});

postButton.style.pointerEvents = "none";
postContent.addEventListener('input', function(){
    if (postContent.value.trim() !== "") {
        // postButton.disabled = false;
        postButton.classList.add('bg-blue-500');
        postButton.classList.add('text-white');
        postButton.classList.add('cursor-pointer');
        postButton.style.pointerEvents = "auto";
      } else {
        postButton.classList.remove('bg-blue-500');
        postButton.classList.remove('text-white');
        postButton.style.pointerEvents = "none";
      }
});

accountIcon.addEventListener('click', function(event){
    displayAccount =! displayAccount;
    if(displayAccount){
        accountDiv.classList.remove('hidden');
    }else{
        accountDiv.classList.add('hidden');
    }
    event.stopPropagation();
});

startPostButton.addEventListener('click', function(event){
    displayPost =! displayPost;
    if(displayPost){
        postDiv.classList.remove('hidden');
        curtain.classList.remove('hidden');
    }else{
        postDiv.classList.add('hidden');
        curtain.classList.add('hidden');
    }
    event.stopPropagation();
});
