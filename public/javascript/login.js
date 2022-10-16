async function loginFormHandler(event) {
    event.preventDefault();

    // retrieving values from user sign-up
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log("username", username);
    console.log("password", password);
    
    // fetch to post new user to database 
    if (username && password) {
      const res =  await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
       
        // check the response status, error handling 
        if (res.ok) {
            document.location.replace('/')
        } else {
            alert(res.statusText);
        }
    }
}




// call signup form and add event listent to signup button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);