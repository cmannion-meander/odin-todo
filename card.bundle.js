/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addCard)
/* harmony export */ });
function addCard() {

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDYXJkKCkge1xuXG4gICAgLy8gbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcIlNhbXBsZSBQcm9qZWN0XCIsIFwiU2FtcGxlIERlc2NyaXB0aW9uXCIsIFtuZXcgVG9kbyhcIm9uZVwiLCBcImhpZ2hcIiwgZmFsc2UpLCBuZXcgVG9kbyhcInR3b1wiLCBcImhpZ2hcIiwgdHJ1ZSksIG5ldyBUb2RvKFwidGhyZWVcIiwgXCJoaWdoXCIsIGZhbHNlKV0pO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnNob3dUb2RvcygpKTtcblxuICAgIC8vIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICBnZW5lcmF0ZU5ld1Byb2plY3QoKTtcblxuICAgIHJldHVybiByZW5kZXJDYXJkKHByb2plY3RzKTtcblxuICAgIH07XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiByZW5kZXJDYXJkKHByb2plY3RzKSB7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhjYXJkcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkJyk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcbiAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgY2FyZFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXRUaXRsZShlLCBwcm9qZWN0cywgaSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBkZWxldGVDYXJkLnNyYyA9ICcuLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJztcbiAgICAgICAgZGVsZXRlQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGRlbGV0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gZGVsZXRlUHJvamVjdChlLCBwcm9qZWN0cywgaSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUNhcmQpO1xuICAgIFxuICAgICAgICBsZXQgY2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmREZXNjLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGNhcmREZXNjLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY2FyZERlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICBjYXJkRGVzYy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0RGVzY3JpcHRpb24oZSwgcHJvamVjdHMsIGkpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYyk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2V0dGluZ3MnKTtcbiAgICBcbiAgICAgICAgbGV0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGFkZC5zcmMgPSAnLi4vYXNzZXRzL3N0YXItcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChhZGQpO1xuICAgIFxuICAgICAgICBsZXQgd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB3YXRjaC5zcmMgPSAnLi4vYXNzZXRzL2V5ZS1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICAgICAgd2F0Y2guc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICB3YXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2VuZXJhdGVTYW1wbGVSZXFzLCBmYWxzZSk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZCh3YXRjaCk7XG4gICAgXG4gICAgICAgIGxldCBmb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZm9yay5zcmMgPSAnLi4vYXNzZXRzL3ZpZXctbGlzdC1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIGZvcmsuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBmb3JrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0c1tpXSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKGZvcmspO1xuICAgIFxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTZXR0aW5ncyk7XG5cbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfTtcblxuICAgIHJldHVybiBjYXJkcztcbn07XG5cblxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9zKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfTtcbiAgICBzaG93VG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICAgIH1cblxufTtcblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodG9kb05hbWUsIHByaW9yaXR5LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH07XG4gICAgLy8gdXBkYXRlVGFzaygpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuY29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAvLyAgICAgfTtcbiAgICAvLyB9O1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcblxuICAgIGNvbnN0IHRvZG9JdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9JdGVtcy5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW1zJyk7XG4gICAgbGV0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS50aXRsZTtcbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY2xvc2Uuc3JjID0gJy4uL2Fzc2V0cy9jbG9zZS5zdmcnO1xuICAgICAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbG9hZENhcmRzKHByb2plY3RzKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgbGV0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZG9EZXNjLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24nKTtcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLmRlc2NyaXB0aW9uO1xuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tbGlzdCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IHRvZG9DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICAgICAgdG9kb0NoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgdG9kb0NoZWNrQm94LmNoZWNrZWQgPSBwcm9qZWN0TmFtZS50b2Rvc1tpXS5jb21wbGV0ZTtcbiAgICAgICAgdG9kb0NoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbXBsZXRlXCIpO1xuICAgICAgICB0b2RvQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRvZ2dsZUNoZWNrQm94KGUsIHByb2plY3ROYW1lLCBpKSk7XG5cbiAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWUudG9kb3NbaV0udG9kb05hbWV9YDtcbiAgICAgICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXRUb2RvVGl0bGUoZSwgcHJvamVjdE5hbWUudG9kb3MsIGkpKTtcblxuICAgICAgICBsZXQgc3RhcnRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgc3RhcnRUb2RvLnNyYyA9ICcuLi9hc3NldHMvcGVuY2lsLW91dGxpbmUuc3ZnJztcbiAgICAgICAgc3RhcnRUb2RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcblxuICAgICAgICBsZXQgZGVsVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbFRvZG8uc3JjID0gJy4uL2Fzc2V0cy90cmFzaC1jYW4tb3V0bGluZS5zdmcnO1xuICAgICAgICBkZWxUb2RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgZGVsVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBkZWxldGVUb2RvKGUsIHByb2plY3ROYW1lLCBpKSk7XG5cbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0NoZWNrQm94KTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoc3RhcnRUb2RvKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsVG9kbyk7XG5cbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kKHRvZG9JdGVtKTtcbiAgICB9O1xuICAgIFxuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvJyk7XG4gICAgbmV3VG9kby50ZXh0Q29udGVudCA9ICgnQWRkIE5ldyBBY3Rpb24gSXRlbScpO1xuICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGFkZFRvZG8ocHJvamVjdE5hbWUpKTtcblxuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZChuZXdUb2RvKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGksIDEpO1xuICAgIHJlbmRlckNhcmQocHJvamVjdEFycmF5KTtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUaXRsZShlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdEFycmF5W2ldLnRpdGxlID0gbmV3VGV4dDtcbn07XG5cbmZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbihlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdEFycmF5W2ldLmRlc2NyaXB0aW9uID0gbmV3VGV4dDtcbn07XG5cbmZ1bmN0aW9uIGFkZFRvZG8ocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXCJlbnRlciBhY3Rpb25cIiwgXCJoaWdoXCIsIGZhbHNlKTtcbiAgICBwcm9qZWN0TmFtZS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUsIHByb2plY3ROYW1lLCBpKSB7XG4gICAgbGV0IHRvZG9MaXN0ID0gcHJvamVjdE5hbWUudG9kb3M7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG59O1xuXG5mdW5jdGlvbiB0b2dnbGVDaGVja0JveChlLCBwcm9qZWN0TmFtZSwgaSkge1xuICAgIGxldCB0b2RvSXRlbSA9IHByb2plY3ROYW1lLnRvZG9zW2ldO1xuICAgIGlmICh0b2RvSXRlbS5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgIHRvZG9JdGVtLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0l0ZW0uY29tcGxldGUgPSB0cnVlO1xuICAgIH07XG4gICAgZGlzcGxheVRvZG9MaXN0KHByb2plY3ROYW1lKTtcbn07XG5cbi8vIE90aGVyIGZ1bmN0aW9uc1xuZnVuY3Rpb24gcmVsb2FkQ2FyZHMocHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQWN0aXZlIFJlcXVpc2l0aW9ucyc7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjYXJkcyk7XG5cbiAgICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3RoZXJDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdGhlci1wcm9qZWN0cycpO1xuXG4gICAgb3RoZXJDYXJkcy5pbm5lckhUTUwgPSBgXG4gICAgPGgyPlRlYW0gQW5ub3VuY2VtZW50czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW5ub3VuY2VtZW50c1wiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGgzPlNvdXJjZS1hLXRob248L2gzPlxuICAgICAgICAgICAgICAgICAgPHA+QXR0ZW50aW9uIHRlYW06IFdlIGFyZSBleGNpdGVkIHRvIGFubm91bmNlIHRoYXQgdGhlIHRlYW0gc291cmNpbmcgcHJvamVjdCB3aWxsIGtpY2sgb2ZmIG9uIE1vbmRheSwgc28gZ2V0IHJlYWR5IHRvIGNvbGxhYm9yYXRlIGFuZCBzb3VyY2Ugc29tZSB0b3AgdGFsZW50ITwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic29saWRcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGgzPldlbGNvbWUgQnJ1Y2UgdG8gdGhlIHRlYW0hPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPkpvaW4gdXMgaW4gZ2l2aW5nIGEgd2FybSB3ZWxjb21lIHRvIEJydWNlLCB3aG8gam9pbnMgb3VyIHByb2R1Y3QgdGVhbSBmcm9tIEdvb2dsZSwgYnJpbmdpbmcgdmFsdWFibGUgZXhwZXJ0aXNlIGFuZCBpbnNpZ2h0cyB0byBvdXIgb3JnYW5pemF0aW9uLjwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic29saWRcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGgzPk5ldyBFbXBsb3llciBCcmFuZGluZyBSZXNvdXJjZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgcHJvdWQgdG8gc2hhcmUgdGhhdCBvdXIgcmVjZW50IGZlYXR1cmUgb24gVGVjaENydW5jaCBjYW4gbm93IGJlIHV0aWxpemVkIGFzIGEgcG93ZXJmdWwgZW1wbG95ZXIgYnJhbmRpbmcgcmVzb3VyY2UsIHNob3djYXNpbmcgb3VyIGNvbXBhbnkncyBpbm5vdmF0aW9uIGFuZCBjdWx0dXJlLjwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+TGF0ZXN0IEhpcmluZyBBY3Rpdml0eTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwidHJlbmRpbmdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9wcm9maWxlMS5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2ZpbGUtcGljLXRlYW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcnNcIj5cbiAgICAgICAgICAgICAgPGgzPlJvZ2VyPC9oMz5cbiAgICAgICAgICAgICAgPHA+UHJvZHVjdCBNYXJrZXRpbmcgTWFuYWdlcjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9wcm9maWxlMi5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2ZpbGUtcGljLXRlYW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcnNcIj5cbiAgICAgICAgICAgICAgPGgzPkJydWNlPC9oMz5cbiAgICAgICAgICAgICAgPHA+U2VuaW9yIFByb2R1Y3QgTWFuYWdlcjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9wcm9maWxlMy5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2ZpbGUtcGljLXRlYW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcnNcIj5cbiAgICAgICAgICAgICAgPGgzPlBldHJhPC9oMz5cbiAgICAgICAgICAgICAgPHA+RGlyZWN0b3IsIFNvZnR3YXJlIEVuZ2luZWVyaW5nPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL3Byb2ZpbGU0LmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwicHJvZmlsZS1waWMtdGVhbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2Vyc1wiPlxuICAgICAgICAgICAgICA8aDM+TG9nYW48L2gzPlxuICAgICAgICAgICAgICA8cD5BY2NvdW50IEV4ZWN1dGl2ZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuYDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3RoZXJDYXJkcyk7XG5cbiAgICByZW5kZXJDYXJkKHByb2plY3RMaXN0KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU5ld1Byb2plY3QoKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcIkVudGVyIFJlcXVpc2l0aW9uIE5hbWVcIiwgXCJFbnRlciBTdW1tYXJ5IEpvYiBEZXNjcmlwdGlvblwiLCBbXSk7XG4gICAgbmV3UHJvamVjdC50b2RvcyA9IGdlbmVyYXRlUmVjcnVpdGluZ1RvZG9zKCk7XG5cbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVSZWNydWl0aW5nVG9kb3MoKSB7XG4gICAgbGV0IHRvZG9MaXN0ID0gW1xuICAgICAgICBuZXcgVG9kbyhcIlJvbGUgS2lja29mZlwiLCBcImhpZ2hcIiwgZmFsc2UpLCBcbiAgICAgICAgbmV3IFRvZG8oXCJEZWZpbmUgSW50ZXJ2aWV3IFNjb3JlY2FyZFwiLCBcImhpZ2hcIiwgZmFsc2UpLCBcbiAgICAgICAgbmV3IFRvZG8oXCJQbGFuIEludGVydmlld3NcIiwgXCJoaWdoXCIsIGZhbHNlKSxcbiAgICAgICAgbmV3IFRvZG8oXCJDcmVhdGUgSW50ZXJ2aWV3IFByb2Nlc3NcIiwgXCJoaWdoXCIsIGZhbHNlKSwgXG4gICAgICAgIG5ldyBUb2RvKFwiU291cmNlICYgSW50ZXJ2aWV3IENhbmRpZGF0ZXNcIiwgXCJoaWdoXCIsIGZhbHNlKSwgXG4gICAgICAgIG5ldyBUb2RvKFwiR2VuZXJhdGUgT2ZmZXIgTGV0dGVyXCIsIFwiaGlnaFwiLCBmYWxzZSlcbiAgICBdO1xuICAgIHJldHVybiB0b2RvTGlzdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVSZXFzKCkge1xuICAgIGxldCBncm93dGggPSBuZXcgUHJvamVjdChcIkdyb3d0aCBIYWNrZXJcIiwgXCJKb2luIG91ciBkeW5hbWljIHN0YXJ0dXAgYW5kIHJldm9sdXRpb25pemUgdXNlciBhY3F1aXNpdGlvbiBhbmQgcmV0ZW50aW9uIHN0cmF0ZWdpZXMgdGhyb3VnaCBkYXRhLWRyaXZlbiBleHBlcmltZW50YXRpb24gYW5kIGlubm92YXRpdmUgbWFya2V0aW5nIGNhbXBhaWducy5cIiwgW10pO1xuICAgIGdyb3d0aC50b2RvcyA9IGdlbmVyYXRlUmVjcnVpdGluZ1RvZG9zKCk7XG5cbiAgICBsZXQgZnVsbHN0YWNrID0gbmV3IFByb2plY3QoXCJGdWxsIFN0YWNrIERldmVsb3BlclwiLCBcIkJlIHBhcnQgb2YgYSBjdXR0aW5nLWVkZ2Ugc3RhcnR1cCBhbmQgc2hhcGUgdGhlIGZ1dHVyZSBvZiBvdXIgcGxhdGZvcm0gYnkgZGVzaWduaW5nIGFuZCBpbXBsZW1lbnRpbmcgc2NhbGFibGUgYW5kIHJvYnVzdCBzb2Z0d2FyZSBzb2x1dGlvbnMgYWNyb3NzIHRoZSBlbnRpcmUgdGVjaG5vbG9neSBzdGFjay5cIiwgW10pO1xuICAgIGZ1bGxzdGFjay50b2RvcyA9IGdlbmVyYXRlUmVjcnVpdGluZ1RvZG9zKCk7XG5cbiAgICBsZXQgY3VzdG9tZXIgPSBuZXcgUHJvamVjdChcIkN1c3RvbWVyIFN1Y2Nlc3MgTWFuYWdlclwiLCBcIkhlbHAgZHJpdmUgY3VzdG9tZXIgc2F0aXNmYWN0aW9uIGFuZCByZXRlbnRpb24gaW4gb3VyIGZhc3QtZ3Jvd2luZyBzdGFydHVwIGJ5IHByb3ZpZGluZyBleGNlcHRpb25hbCBzdXBwb3J0LCBidWlsZGluZyByZWxhdGlvbnNoaXBzLCBhbmQgaW1wbGVtZW50aW5nIHN1Y2Nlc3Mgc3RyYXRlZ2llcy5cIiwgW10pO1xuICAgIGN1c3RvbWVyLnRvZG9zID0gZ2VuZXJhdGVSZWNydWl0aW5nVG9kb3MoKTtcblxuICAgIGxldCBwcm9kdWN0ID0gbmV3IFByb2plY3QoXCJQcm9kdWN0IERlc2lnbmVyXCIsIFwiSm9pbiBvdXIgdGFsZW50ZWQgdGVhbSBvZiBkZXNpZ25lcnMgYW5kIGNyYWZ0IGludHVpdGl2ZSBhbmQgdmlzdWFsbHkgc3R1bm5pbmcgdXNlciBleHBlcmllbmNlcyBmb3Igb3VyIGlubm92YXRpdmUgcHJvZHVjdCwgbWFraW5nIGEgbWVhbmluZ2Z1bCBpbXBhY3Qgb24gaG93IHVzZXJzIGludGVyYWN0IHdpdGggb3VyIHBsYXRmb3JtLlwiLCBbXSk7XG4gICAgcHJvZHVjdC50b2RvcyA9IGdlbmVyYXRlUmVjcnVpdGluZ1RvZG9zKCk7XG5cbiAgICBsZXQgb3BzID0gbmV3IFByb2plY3QoXCJPcGVyYXRpb25zIEFzc29jaWF0ZVwiLCBcIlBsYXkgYSBjcnVjaWFsIHJvbGUgaW4gdGhlIGRheS10by1kYXkgb3BlcmF0aW9ucyBvZiBvdXIgc3RhcnR1cCwgZW5zdXJpbmcgc21vb3RoIHByb2Nlc3NlcyBhbmQgZWZmaWNpZW5jeSBhY3Jvc3MgdmFyaW91cyBkZXBhcnRtZW50cywgYW5kIGNvbnRyaWJ1dGluZyB0byBvdXIgb3ZlcmFsbCBzdWNjZXNzIGFuZCBncm93dGguXCIsIFtdKTtcbiAgICBvcHMudG9kb3MgPSBnZW5lcmF0ZVJlY3J1aXRpbmdUb2RvcygpO1xuXG4gICAgcHJvamVjdHMucHVzaChncm93dGgpO1xuICAgIHByb2plY3RzLnB1c2goZnVsbHN0YWNrKTtcbiAgICBwcm9qZWN0cy5wdXNoKGN1c3RvbWVyKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgIHByb2plY3RzLnB1c2gob3BzKTtcblxuICAgIHJlbmRlckNhcmQocHJvamVjdHMpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=