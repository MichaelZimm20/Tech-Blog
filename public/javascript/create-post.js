async function newPostHandler(event) {
    event.preventDefault();

    // get values from title and post-body from dashboard handlebars
    const title = document.querySelector('input[name="post-title"]').value;
    const posted_note = document.querySelector('textarea[name="posted-note"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            posted_note
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


const create = document.querySelector('.create-new-post').addEventListener('submit', newPostHandler);
console.log("click", create);