// window.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#signup-form');
    const creditCard = document.querySelector('#cc');
    const checkBox = document.querySelector('#checkbox');
    const veggieSelect = document.querySelector('#veggie');

    // form.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     // what this will do is prevent the default behavior of the form.
    //     alert('SUBMITTED THE FORM!');
    //     console.log('cc',creditCard.value );
    //     console.log('cb',checkBox.checked);
    //     console.log('v',veggieSelect.value );
    //     // from here we could do the following
    //     // send data to db 
    //     // append something to page using form data 
        
    // })

    // INPUT EVENT we can update the form object to our db as a user types and not have to wait for a submit event 
    const formData = {};
    for (let input of [creditCard, checkBox, veggieSelect]){
        input.addEventListener('input', function ({target}) {
            const {name, type, value, checked} = target;
            formData[name] = type === 'checkbox' ? checked : value;
            console.log(formData);
        })
    }

    // AN INPUT EVENT WILL FOCUS ON THE INDIVIDUAL INPUT A CHANGE EVENT ON AN INPUT WILL ONLY FIRE ONCE YOU CLICK OUTSIDE OF THE TEXT INPUT 
    // OR HIT ENTER 
//     for (let input of [creditCard, checkBox, veggieSelect]) {
//     input.addEventListener('change', function ({ target }) {
//         const { name, type, value, checked } = target;
//         formData[name] = type === 'checkbox' ? checked : value;
//         console.log(formData);
//     })
// }

    // creditCard.addEventListener('input', function(e){
    //     e.preventDefault();
    //     console.log('credit card changed.', e);
    //     formData['cc'] = e.target.value;
    // })
    // veggieSelect.addEventListener('input', function(e){
    //     e.preventDefault();
    //     console.log('VEGGIE CHANGED', e);
    //     formData['veggie'] = e.target.value;
    // })
    // checkBox.addEventListener('input', function(e){
    //     e.preventDefault();
    //     console.log('CHECKBOX CHANGED!', e);
    //     formData['terms'] = e.target.checked;
    // })

// })



