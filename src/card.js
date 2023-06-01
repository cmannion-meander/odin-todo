export default function addCard() {

    let newProject = new Project("Sample Project", "Sample Description", [new Todo("one", "high", false), new Todo("two", "high", true), new Todo("three", "high", false)]);

    // console.log(newProject);

    // console.log(newProject.showTodos());

    projects.push(newProject);

    return renderCard(projects);

    };

function renderCard(projects) {

    const cards = document.querySelector('.cards');

    removeAllChildNodes(cards);

    for (let i = 0; i < projects.length; i++) {
        // let todoItem = document.createElement("li");

        let card = document.createElement('div');
        card.setAttribute('class','card');
    
        let cardTitle = document.createElement('h3');
        cardTitle.textContent = projects[i].title;
        cardTitle.setAttribute('contenteditable', 'true');
        cardTitle.addEventListener("input", e => editTitle(e, projects, i));
        card.appendChild(cardTitle);
    
        let cardDesc = document.createElement('p');
        cardDesc.textContent = projects[i].description;
        cardDesc.setAttribute('contenteditable', 'true');
        cardDesc.addEventListener("input", e => editDescription(e, projects, i));
        card.appendChild(cardDesc);
    
        let cardSettings = document.createElement('div');
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
            displayTodoList(projects[i]);
        }, false);
        cardSettings.appendChild(fork);
    
        card.appendChild(cardSettings);

        cards.appendChild(card);
    };

    return cards;
};

let projects = [];

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

class Todo {
    constructor(todoName, priority, complete) {
        this.todoName = todoName;
        this.priority = priority;
        this.complete = complete;
    };
    // updateTask() {
    //     if (this.complete === false) {
    //         this.complete = true;
    //     } else {
    //         this.complete = false;
    //     };
    // };
};

function displayTodoList(projectName) {
    const content = document.querySelector('.content');
    removeAllChildNodes(content);

    const todoItems = document.createElement('div');
    todoItems.classList.add('todo-items');
    let todoHeader = document.createElement('h2');
    todoHeader.textContent = projectName.title;
    todoItems.appendChild(todoHeader);
    let close = document.createElement("img");
        close.src = '../assets/close.svg';
        close.setAttribute('class','card-icon');
        close.addEventListener("click", function() {
            reloadCards(projects);
        }, false);
        todoItems.appendChild(close);

    let todoDesc = document.createElement('p');
    todoDesc.textContent = projectName.description;
    todoItems.appendChild(todoDesc);

    const todoList = document.createElement("div");
    todoList.setAttribute('class','todo-list');

    console.log(projectName.todos);


    for (let i = 0; i < projectName.todos.length; i++) {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-list-item");

        let todoCheckBox = document.createElement("INPUT");
        todoCheckBox.setAttribute("type", "checkbox");
        todoCheckBox.checked = projectName.todos[i].complete;
        todoCheckBox.classList.add("todo-complete");
        todoCheckBox.addEventListener('click', e => toggleCheckBox(e, projectName, i));

        let todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = `${projectName.todos[i].todoName}`;
        todoTitle.setAttribute('contenteditable', 'true');
        todoTitle.addEventListener("input", e => editTodoTitle(e, projectName.todos, i));

        let delTodo = document.createElement("img");
        delTodo.src = '../assets/close.svg';
        delTodo.setAttribute('class','card-icon');
        delTodo.addEventListener("click", e => deleteTodo(e, projectName, i));

        todoItem.appendChild(todoCheckBox);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(delTodo);

        todoList.append(todoItem);
    };
    
    todoItems.appendChild(todoList);

    const newTodo = document.createElement("div");
    newTodo.classList.add('new-todo');
    newTodo.textContent = ('Add New Action Item');
    newTodo.addEventListener('click', e => addTodo(projectName));

    console.log(projectName.todos);


    todoItems.appendChild(newTodo);

    content.appendChild(todoItems);

    return content;
};

function editTitle(e, projectArray, i) {
    const newText = e.target.textContent;
    projectArray[i].title = newText;
};

function editDescription(e, projectArray, i) {
    const newText = e.target.textContent;
    projectArray[i].description = newText;
};

function addTodo(projectName) {
    const newTodo = new Todo("enter action", "high", false);
    projectName.todos.push(newTodo);
    displayTodoList(projectName);
};

function deleteTodo(e, projectName, i) {
    let todoList = projectName.todos;
    todoList.splice(i, 1);
    displayTodoList(projectName);
};

function toggleCheckBox(e, projectName, i) {
    let todoItem = projectName.todos[i];
    if (todoItem.complete == true) {
        todoItem.complete = false;
    } else {
        todoItem.complete = true;
    };
    displayTodoList(projectName);
};

// Other functions
function reloadCards(projectList) {
    const content = document.querySelector('.content');

    removeAllChildNodes(content);

    const projects = document.createElement('div');
    projects.classList.add('projects');
    let projectHeader = document.createElement('h2');
    projectHeader.textContent = 'Your Projects';
    projects.appendChild(projectHeader);

    const cards = document.createElement('div');
    cards.classList.add('cards');

    projects.appendChild(cards);

    const otherCards = document.createElement('div');
    otherCards.classList.add('other-projects');

    let announceHeader = document.createElement('h2');
    announceHeader.textContent = 'Anouncements';
    otherCards.appendChild(announceHeader);
    const announcements = document.createElement('div');
    announcements.classList.add('announcements');
    announcements.textContent = "Hold for Announcements";

    // add dummy announcement content

    otherCards.appendChild(announcements);

    let trendingHeader = document.createElement('h2');
    trendingHeader.textContent = 'Trending';
    otherCards.appendChild(trendingHeader);
    const trending = document.createElement('div');
    trending.classList.add('trending');
    trending.textContent = "Hold for Trending";

    // add dummy trending content

    otherCards.appendChild(trending);

    content.appendChild(projects);
    content.appendChild(otherCards);

    renderCard(projectList);

    return content;
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};