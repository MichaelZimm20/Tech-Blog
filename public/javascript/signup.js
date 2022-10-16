

async function signupFormHandler(event) {
    event.preventDefault();

    // retrieving values from user sign-up
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log("username", username);
    console.log("password", password);
    
    // fetch to post new user to database 
    if (username && password) {
      const res =  await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
       
        // check the response status, error handling 
        if (res.ok) {
            console.log('Successfully added new user!')
        } else {
            alert(res.statusText);
        }
    }
}

// call signup form and add event listent to signup button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);