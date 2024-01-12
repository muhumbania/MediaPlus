const postButton = document.getElementById('postButton');
const postContent = document.getElementById('postContent');
const accountIcon = document.querySelector('.account');
const startPostButton = document.getElementById('startPost');
const accountDiv = document.querySelector('.accountDiv');
let displayAccount = false;

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

accountIcon.addEventListener('click', function(){
    displayAccount =! displayAccount;
    if(displayAccount){
        accountDiv.classList.remove('hidden');
    }else{
        accountDiv.classList.add('hidden');
    }
});

startPostButton.addEventListener('click', function(){
    alert('start post');
});
