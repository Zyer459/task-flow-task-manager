$(document).ready(function () {
    $('#task-list').on('change', '.toggler', function () {
        const taskId = $(this).attr('id');
        // Check if the specific checkbox is checked
        const isChecked = $(this).prop('checked');//aihelp
        const newStatus = isChecked ? 'completed' : 'pending';

        console.log(`Task ${taskId} is now ${newStatus}`);
        
        updateStatus(taskId, newStatus);
    });
});

function updateStatus(id, status) {
    $.ajax({
        url: `/api/tasks/${id}/toggle`,
        type: 'PATCH',
        success: function() {
            console.log("Status synced with server");
            location.reload();
        },
        error: function() {
            alert("Failed to update status");
            // Optional: uncheck the box if the server fails
            $(`#${id}`).prop('checked', !isChecked);//ai help
        }
    });
}