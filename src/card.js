export default function addCard() {

    let newProject = new Project("Sample Project", "Sample Description", ["one", "two", "three"]);

    // console.log(newProject);

    // console.log(newProject.showTodos());

    return renderCard(newProject);

    };

function renderCard(projectName) {
    const cards = document.querySelector('.cards');

    const card = document.createElement('div');
    card.setAttribute('class','card');

    let cardTitle = document.createElement('h3');
    cardTitle.textContent = projectName.title;
    card.appendChild(cardTitle);

    let cardDesc = document.createElement('p');
    cardDesc.textContent = projectName.description;
    card.appendChild(cardDesc);

    const cardSettings = document.createElement('div');
    cardSettings.classList.add('card-settings');

    let add = document.createElement("img");
    add.src = '../assets/star-plus-outline.svg';
    add.setAttribute('class','card-icon');
    cardSettings.appendChild(add);

    let watch = document.createElement("img");
    watch.src = '../assets/eye-plus-outline.svg';
    watch.setAttribute('class','card-icon');
    cardSettings.appendChild(watch);

    let fork = document.createElement("img");
    fork.src = '../assets/source-fork.svg';
    fork.setAttribute('class','card-icon');
    fork.addEventListener("click", function() {
        displayTodoList(projectName);
    }, false);
    cardSettings.appendChild(fork);

    card.appendChild(cardSettings);

    cards.appendChild(card);

    return cards;
};

class Project {
    constructor(title, description, todos) {
        this.title = title;
        this.description = description;
        this.todos = todos;
    };
    showTodos() {
        return this.todos;
    }

};

function displayTodoList(projectName) {
    const content = document.querySelector('.content');
    removeAllChildNodes(content);

    const todoItems = document.createElement('div');
    todoItems.classList.add('todo-items');
    let todoHeader = document.createElement('h2');
    todoHeader.textContent = projectName.title;;
    todoItems.appendChild(todoHeader);

    const todoList = document.createElement("ul");
    todoList.setAttribute('class','todo-list');


    for (let i = 0; i < projectName.todos.length; i++) {
        let todoItem = document.createElement("li");
        todoItem.textContent = `${projectName.todos[i]}`;
        console.log(projectName.todos[i]);
        todoList.append(todoItem);
    };

    todoItems.appendChild(todoList);

    content.appendChild(todoItems);

    return content;
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};