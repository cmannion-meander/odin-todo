export default function addCard() {

    let newProject = new Project("Sample Project", "Sample Description", [new Todo("one", "high", false)]);

    // console.log(newProject);

    // console.log(newProject.showTodos());

    projects.push(newProject);

    console.log(projects);

    return renderCard(projects);

    };

function renderCard(projects) {

    const cards = document.querySelector('.cards');

    removeAllChildNodes(cards);

    for (let i = 0; i < projects.length; i++) {
        let todoItem = document.createElement("li");

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
    updateTask() {
        if (this.complete === false) {
            this.complete = true;
        } else {
            this.complete = false;
        };
    };
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

    const todoList = document.createElement("ul");
    todoList.setAttribute('class','todo-list');


    for (let i = 0; i < projectName.todos.length; i++) {
        let todoItem = document.createElement("li");
        todoItem.textContent = `${projectName.todos[i].todoName}`;
        todoItem.setAttribute('contenteditable', 'true');
        todoItem.addEventListener("input", e => editTodo(e, projectName.todos, i));
        console.log(projectName.todos[i]);
        todoList.append(todoItem);
    };

    todoItems.appendChild(todoList);

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

function editTodo(e, todoList, i) {
    const newText = e.target.textContent;
    todoList[i] = newText;
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