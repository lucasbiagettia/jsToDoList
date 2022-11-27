const deleteIcon = (id) =>{
    const i = document.createElement('i');
    i.classList.add ('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', () => deleteTask(id));
    return i;
};

const deleteTask = (id) => {
    JSON.parese(localStorage.getItem('tasks'));
    tasks.splice(id,1);
};

export default deleteIcon;