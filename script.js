import checkComplete from './components/checkComplete.js';
import deleteTask from './components/deleteTask.js';


const btn = document.querySelector('[data-form-btn]');

    const addTask = (event) => {
        const list = document.querySelector('[data-list]');
        const task = createTask(event);
        list.appendChild(task);

    }

    const createTask = (event) => {
        event.preventDefault();
        const input = document.querySelector ('[data-form-input');
        const calendar = document.querySelector( '[data-form-date]');
        const value = input.value;
        const date = calendar.value;
        const dateFormat = moment(date).format("DD/MM/YYYY");
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const taskContent = document.createElement('div');
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
        const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteTask());
        return task;
  
    };

    btn.addEventListener('click', addTask);




