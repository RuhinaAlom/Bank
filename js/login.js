//step-1:add click event handler with the submit buttn 
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3 get password
    //3.a: set id on the html element
    //3.b:get the element
    //3.c: get the value from the element
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    //DANGER: Do NOT VERIFY email password on the client side
    //setp-4 : verify email and password.
    if (email === 'sontan@baap.com' && password === 'secret') {
        console.log('valid user')
    }
    else {
        console.log('invalid user')
    }
})