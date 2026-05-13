$(document).ready(function () {
    $('#task-list').on('click', '.update-btn-class', function () {
        const taskId = $(this).attr('id');

        location.href = `/update-task/${taskId}`; //
    });
});

//once I understood how to implement add-view-del update was easy so opted to write it myself, googled or prev code if I got stuck
//wrote this after update-save.js hence the $(document) jquery instead of document.addeventlistener(DOMcontentloaded....)