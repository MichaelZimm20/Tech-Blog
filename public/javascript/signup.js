function signupFormHandler(event) {
    event.preventDefault();

    // retrieving values from user sign-up
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log("username", username);
    console.log("password", password);
    
    if (username && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then((res) => {console.log(res)})
    }
}

// call signup form and add event listent to signup button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);