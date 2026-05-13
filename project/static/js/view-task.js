$.getJSON ('/api/tasks', data => {
    data.forEach(task => {
        let strikeClass = '';
        let colorClass = '';
        if (task[3] === 'completed'){
            strikeClass = 'strike'
            colorClass = 'backgreen'
        }
        else{
            strikeClass = ''
            colorClass = 'backred'
        }
        $('#task-list').append(
            `
            <tr id="row-${task[0]}" class="${colorClass}">
                <td class="id-class">${task[0]}</td>
                <td><span class="check ${strikeClass}">${task[1]}</span></td>
                <td>${task[2]}</td>
                <td class="stat">${task[3]}</td>
                <td>${task[4]}</td>
                <td>${task[5]}</td>
                <td>
                    <button class="update-btn-class" id="${task[0]}">
                        Update task
                    </button>
                </td>
                <td>
                    <button class="del-btn-class" id="${task[0]}">
                        Delete
                    </button>
                </td>
                <td>
                    <input class="toggler" type="checkbox" id="${task[0]}">
                </td>
            </tr>
            `
        );
    });
});

//should have realized earlier, implementing strike and color here before trying other ways -_-
//kept this file away from any ai assist, if any ai made changes break I can always view problems from here, can be called root
//for all ai assist I changed this file according to the ai changed code snippets from other files
//if this somehow breaks client UI would be completely blind to changes