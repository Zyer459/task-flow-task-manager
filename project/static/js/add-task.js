const title = document.getElementById('title');
const description = document.getElementById('description');

const btn = document.getElementById('add');

btn.addEventListener('click', () => {
    title_val = title.value;
        newTask = {
            title: title_val,
            description: description.value
        }
        console.log(newTask)

        $.ajax({
            url: '/api/tasks',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newTask),
            success: (response) => {
                    console.log(response.result);
                    window.alert("Task added");
                    alert("code: " + response.result);
                    //window.location.reload();
                    location.href = "/view-task"
            },
                   
            error: (xhr) => {
                if (xhr.status == '400') {
                    window.alert("Must enter title");
                    //console.log("enter task title");
                    alert("Error adding task(bad request): " + xhr.status);
                }
            }
        })
})