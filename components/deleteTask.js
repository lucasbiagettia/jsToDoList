const deleteTask = () =>{
    const i = document.createElement('i');
    i.classList.add ('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteCard);
    return i;
};

const deleteCard = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
};

export default deleteTask;