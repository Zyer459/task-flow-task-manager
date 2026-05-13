document.addEventListener('DOMContentLoaded', () => {
    const update_btn = document.getElementById('update');
    
    if (update_btn) {
        update_btn.addEventListener('click', () => {
            const id_val = document.getElementById('id').value;
            const title_val = document.getElementById('update-title').value;
            const desc_val = document.getElementById('update-description').value;
            const status_val = document.getElementById('update-status').value;

            const newValues = {
                title: title_val,
                description: desc_val,
                status: status_val
            };//obj

            $.ajax({
                url: `/api/tasks/${id_val}`, //finally to the actual api part
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(newValues),
                success: (response) => {
                    window.location.href = "/view-task";
                },
                error: (xhr) => {
                    if (xhr.status == '400') {
                        window.alert('Must Enter title');
                        alert("Error updating task(Bad request): " + xhr.status);
                    }
                }
            });
        });
    }
});