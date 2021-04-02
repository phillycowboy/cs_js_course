window.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#signup-form');
    const creditCard = document.querySelector('#cc');
    const checkBox = document.querySelector('#checkbox');
    const veggieSelect = document.querySelector('#veggie');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        // what this will do is prevent the default behavior of the form.
        alert('SUBMITTED THE FORM!');
        console.log('cc',creditCard.value );
        console.log('cb',checkBox.checked);
        console.log('v',veggieSelect.value );
        // from here we could do the following
        // send data to db 
        // append something to page using form data 
        
    })

})



