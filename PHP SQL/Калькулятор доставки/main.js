const message = document.querySelector(".message");

const form = document.querySelector(".interaction");
form.addEventListener('submit', async (e) => 
{
    e.preventDefault();
    let response = await fetch('submit.php',
        {
            method: 'POST',
            body: new FormData(e.target)
        }
    );
    let result = await response.text();
    console.log(result);
    message.innerHTML = result;
});

