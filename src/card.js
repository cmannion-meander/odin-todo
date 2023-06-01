export default function addCard() {

    // let newProject = new Project("Sample Project", "Sample Description", [new Todo("one", "high", false), new Todo("two", "high", true), new Todo("three", "high", false)]);

    // console.log(newProject);

    // console.log(newProject.showTodos());

    // projects.push(newProject);

    generateNewProject();

    return renderCard(projects);

    };

let projects = [];

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

        let deleteCard = document.createElement("img");
        deleteCard.src = '../assets/trash-can-outline.svg';
        deleteCard.setAttribute('class','card-icon');
        deleteCard.addEventListener("click", e => deleteProject(e, projects, i));
        card.appendChild(deleteCard);
    
        let cardDesc = document.createElement('p');
        cardDesc.textContent = projects[i].description;
        cardDesc.classList.add('card-description');
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
        watch.addEventListener("click", generateSampleReqs, false);
        cardSettings.appendChild(watch);
    
        let fork = document.createElement("img");
        fork.src = '../assets/view-list-outline.svg';
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
    todoDesc.classList.add('card-description');
    todoDesc.textContent = projectName.description;
    todoItems.appendChild(todoDesc);

    const todoList = document.createElement("div");
    todoList.setAttribute('class','todo-list');

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

        let startTodo = document.createElement("img");
        startTodo.src = '../assets/pencil-outline.svg';
        startTodo.setAttribute('class','card-icon');

        let delTodo = document.createElement("img");
        delTodo.src = '../assets/trash-can-outline.svg';
        delTodo.setAttribute('class','card-icon');
        delTodo.addEventListener("click", e => deleteTodo(e, projectName, i));

        todoItem.appendChild(todoCheckBox);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(startTodo);
        todoItem.appendChild(delTodo);

        todoList.append(todoItem);
    };
    
    todoItems.appendChild(todoList);

    const newTodo = document.createElement("div");
    newTodo.classList.add('new-todo');
    newTodo.textContent = ('Add New Action Item');
    newTodo.addEventListener('click', e => addTodo(projectName));

    todoItems.appendChild(newTodo);

    content.appendChild(todoItems);

    return content;
};

function deleteProject(e, projectArray, i) {
    projectArray.splice(i, 1);
    renderCard(projectArray);
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
    projectHeader.textContent = 'Active Requisitions';
    projects.appendChild(projectHeader);

    const cards = document.createElement('div');
    cards.classList.add('cards');

    projects.appendChild(cards);

    const otherCards = document.createElement('div');
    otherCards.classList.add('other-projects');

    otherCards.innerHTML = `
    <h2>Team Announcements</h2>
      <div class="announcements">
          <ul>
              <li>
                  <h3>Source-a-thon</h3>
                  <p>Attention team: We are excited to announce that the team sourcing project will kick off on Monday, so get ready to collaborate and source some top talent!</p>
              </li>
              <hr class="solid">
              <li>
                  <h3>Welcome Bruce to the team!</h3>
                  <p>Join us in giving a warm welcome to Bruce, who joins our product team from Google, bringing valuable expertise and insights to our organization.</p>
              </li>
              <hr class="solid">
              <li>
                  <h3>New Employer Branding Resource</h3>
                  <p>We are proud to share that our recent feature on TechCrunch can now be utilized as a powerful employer branding resource, showcasing our company's innovation and culture.</p>
              </li>
          </ul>
      </div>
      <h2>Latest Hiring Activity</h2>
      <div class="trending">
          <img src="../assets/profile1.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Roger</h3>
              <p>Product Marketing Manager</p>
          </div>
          <img src="../assets/profile2.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Bruce</h3>
              <p>Senior Product Manager</p>
          </div>
          <img src="../assets/profile3.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Petra</h3>
              <p>Director, Software Engineering</p>
          </div>
          <img src="../assets/profile4.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Logan</h3>
              <p>Account Executive</p>
          </div>
      </div>
`;

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

function generateNewProject() {
    let newProject = new Project("Enter Requisition Name", "Enter Summary Job Description", []);
    newProject.todos = generateRecruitingTodos();

    projects.push(newProject);
};

function generateRecruitingTodos() {
    let todoList = [
        new Todo("Role Kickoff", "high", false), 
        new Todo("Define Interview Scorecard", "high", false), 
        new Todo("Plan Interviews", "high", false),
        new Todo("Create Interview Process", "high", false), 
        new Todo("Source & Interview Candidates", "high", false), 
        new Todo("Generate Offer Letter", "high", false)
    ];
    return todoList;
}

function generateSampleReqs() {
    let growth = new Project("Growth Hacker", "Join our dynamic startup and revolutionize user acquisition and retention strategies through data-driven experimentation and innovative marketing campaigns.", []);
    growth.todos = generateRecruitingTodos();

    let fullstack = new Project("Full Stack Developer", "Be part of a cutting-edge startup and shape the future of our platform by designing and implementing scalable and robust software solutions across the entire technology stack.", []);
    fullstack.todos = generateRecruitingTodos();

    let customer = new Project("Customer Success Manager", "Help drive customer satisfaction and retention in our fast-growing startup by providing exceptional support, building relationships, and implementing success strategies.", []);
    customer.todos = generateRecruitingTodos();

    let product = new Project("Product Designer", "Join our talented team of designers and craft intuitive and visually stunning user experiences for our innovative product, making a meaningful impact on how users interact with our platform.", []);
    product.todos = generateRecruitingTodos();

    let ops = new Project("Operations Associate", "Play a crucial role in the day-to-day operations of our startup, ensuring smooth processes and efficiency across various departments, and contributing to our overall success and growth.", []);
    ops.todos = generateRecruitingTodos();

    projects.push(growth);
    projects.push(fullstack);
    projects.push(customer);
    projects.push(product);
    projects.push(ops);

    renderCard(projects);
};