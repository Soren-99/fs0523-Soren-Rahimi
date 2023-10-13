
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-button">Elimina</button>
        `;
        taskList.appendChild(li);
          
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskInput.value = '';
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) =>{
    if (event.key === 'Enter') {
        addTask();
    }
});





