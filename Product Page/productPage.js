//Getting the HTML elements by their IDs
const open = document.getElementById('shoppingCartButton');
const close = document.getElementById('close');
const modal_container = document.getElementById('modal_container');


//Adding event listeners

//Adding the "show" class to the modal container, which is defined in the CSS file
open.addEventListener('click', () =>{
    modal_container.classList.add('show');
});

//Removing the class 
close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
});
