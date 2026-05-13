const title = document.getElementById('title');

const btn = document.getElementById('add');

btn.addEventListener ('click', () => {
    title_val = title.value;
    if (title_val === "") {
        alert("Must enter title");
    }
})