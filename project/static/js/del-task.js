$(document).ready(function() {
    // 1. Attach the listener to the parent (which exists on page load)
    $('#task-list').on('click', '.del-btn-class', function(e) {
        // 'this' refers to the button that was actually clicked
        const taskId = $(this).attr('id');
        
        console.log("Delete this task:", taskId);

        // 2.delete logic
        deleteTaskFromServer(taskId);
    });
});

function deleteTaskFromServer(id) {
    $.ajax({
        url: `/api/tasks/${id}`,
        type: 'DELETE',
        success: function() {
            //Remove the row from the table
            $(`#row-${id}`).remove(); //since all the DOM is loaded its safe to remove html elements now
        }
    });
}

//ai help