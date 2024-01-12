







// const body = document.getElementById('body');

// // body.classList.remove('overflow-hidden');

// const newPost = document.querySelectorAll('.newPost');
// const startPostButton = document.getElementById('startPost');
// document.querySelector('.postForm').addEventListener('click', event => event.stopPropagation());

// //Account icon element
// const accountIcon = document.querySelector('.account');
// document.querySelector('.accountDiv').addEventListener('click', event => event.stopPropagation());

// //Header icons
// const headerIcons = document.querySelectorAll('.h-icon');

// //text area content
// const textarea = document.getElementById('postContent');

// //post button
// const postButton = document.getElementById('postButton');

// //Function for new post animation
// function display(state){
//     if(state === true){
//         newPost.forEach(function(newPost){
//             newPost.classList.remove('hidden');
//         });
//         body.classList.add('overflow-hidden');
//     }else{
//         newPost.forEach(function(newPost){
//             newPost.classList.add('hidden');
//         });
//         body.classList.remove('overflow-hidden');
//     }
// }

// //Display the postForm when the Start post button gets clicked
// startPostButton.addEventListener('click', function(event){
//     event.stopPropagation();
//     display(true);
// });

// //Display the account div when the account icon gets clicked
// accountIcon.addEventListener('click', function(event){
//     event.stopPropagation();
//     document.querySelector('.accountDiv').classList.remove('hidden');
// });

// //Hide every pop up divs when the window gets clicked
// window.addEventListener('click', function(){
//     display(false);
//     document.querySelector('.accountDiv').classList.add('hidden');
// });


// const buffer = ['1', '1'];
// headerIcons.forEach(function(headerIcon){

//     headerIcon.addEventListener('click', function(){
//         alert('hello');
//         buffer.push(`${this.id}`);
//         buffer.shift();
        
//         if(buffer[0] !== buffer[1]){
//             document.querySelector(`.i${buffer[1]}`).setAttribute('type', 'solid');
//             document.querySelector(`.i${buffer[0]}`).setAttribute('type', 'regular');
//             document.getElementById(buffer[1]).classList.add('border-b-2');
//             document.getElementById(buffer[0]).classList.remove('border-b-2');
//         }else{
//             document.querySelector(`.i${buffer[0]}`).setAttribute('type', 'solid');
//             document.getElementById(buffer[0]).classList.add('border-b-2');
//         }

//     });
// });






