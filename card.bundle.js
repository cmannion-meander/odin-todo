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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2FyZCgpIHtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJTYW1wbGUgUHJvamVjdFwiLCBcIlNhbXBsZSBEZXNjcmlwdGlvblwiLCBbbmV3IFRvZG8oXCJvbmVcIiwgXCJoaWdoXCIsIGZhbHNlKSwgbmV3IFRvZG8oXCJ0d29cIiwgXCJoaWdoXCIsIHRydWUpLCBuZXcgVG9kbyhcInRocmVlXCIsIFwiaGlnaFwiLCBmYWxzZSldKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdC5zaG93VG9kb3MoKSk7XG5cbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gICAgcmV0dXJuIHJlbmRlckNhcmQocHJvamVjdHMpO1xuXG4gICAgfTtcblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChwcm9qZWN0cykge1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY2FyZHMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZCcpO1xuICAgIFxuICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIGNhcmRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0VGl0bGUoZSwgcHJvamVjdHMsIGkpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgIFxuICAgICAgICBsZXQgY2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmREZXNjLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGNhcmREZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgY2FyZERlc2MuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gZWRpdERlc2NyaXB0aW9uKGUsIHByb2plY3RzLCBpKSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2MpO1xuICAgIFxuICAgICAgICBsZXQgY2FyZFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdjYXJkLXNldHRpbmdzJyk7XG4gICAgXG4gICAgICAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhZGQuc3JjID0gJy4uL2Fzc2V0cy9zdGFyLXBsdXMtb3V0bGluZS5zdmcnO1xuICAgICAgICBhZGQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICBcbiAgICAgICAgbGV0IHdhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgd2F0Y2guc3JjID0gJy4uL2Fzc2V0cy9leWUtcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIHdhdGNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKHdhdGNoKTtcbiAgICBcbiAgICAgICAgbGV0IGZvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBmb3JrLnNyYyA9ICcuLi9hc3NldHMvc291cmNlLWZvcmsuc3ZnJztcbiAgICAgICAgZm9yay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGZvcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGlzcGxheVRvZG9MaXN0KHByb2plY3RzW2ldKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQoZm9yayk7XG4gICAgXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFNldHRpbmdzKTtcblxuICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNhcmRzO1xufTtcblxubGV0IHByb2plY3RzID0gW107XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgdG9kb3MpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgICB9O1xuICAgIHNob3dUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuXG59O1xuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvTmFtZSwgcHJpb3JpdHksIGNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMudG9kb05hbWUgPSB0b2RvTmFtZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfTtcbiAgICAvLyB1cGRhdGVUYXNrKCkge1xuICAgIC8vICAgICBpZiAodGhpcy5jb21wbGV0ZSA9PT0gZmFsc2UpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIC8vICAgICB9O1xuICAgIC8vIH07XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kb0xpc3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0l0ZW1zLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbXMnKTtcbiAgICBsZXQgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdG9kb0hlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnRpdGxlO1xuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjbG9zZS5zcmMgPSAnLi4vYXNzZXRzL2Nsb3NlLnN2Zyc7XG4gICAgICAgIGNsb3NlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVsb2FkQ2FyZHMocHJvamVjdHMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBsZXQgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb0Rlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS5kZXNjcmlwdGlvbjtcbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvLWxpc3QnKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLnRvZG9zKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IHRvZG9DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICAgICAgdG9kb0NoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgdG9kb0NoZWNrQm94LmNoZWNrZWQgPSBwcm9qZWN0TmFtZS50b2Rvc1tpXS5jb21wbGV0ZTtcbiAgICAgICAgdG9kb0NoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbXBsZXRlXCIpO1xuICAgICAgICB0b2RvQ2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRvZ2dsZUNoZWNrQm94KGUsIHByb2plY3ROYW1lLCBpKSk7XG5cbiAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWUudG9kb3NbaV0udG9kb05hbWV9YDtcbiAgICAgICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXRUb2RvVGl0bGUoZSwgcHJvamVjdE5hbWUudG9kb3MsIGkpKTtcblxuICAgICAgICBsZXQgZGVsVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbFRvZG8uc3JjID0gJy4uL2Fzc2V0cy9jbG9zZS5zdmcnO1xuICAgICAgICBkZWxUb2RvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgZGVsVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBkZWxldGVUb2RvKGUsIHByb2plY3ROYW1lLCBpKSk7XG5cbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0NoZWNrQm94KTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsVG9kbyk7XG5cbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kKHRvZG9JdGVtKTtcbiAgICB9O1xuICAgIFxuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvJyk7XG4gICAgbmV3VG9kby50ZXh0Q29udGVudCA9ICgnQWRkIE5ldyBBY3Rpb24gSXRlbScpO1xuICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGFkZFRvZG8ocHJvamVjdE5hbWUpKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLnRvZG9zKTtcblxuXG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbXMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiBlZGl0VGl0bGUoZSwgcHJvamVjdEFycmF5LCBpKSB7XG4gICAgY29uc3QgbmV3VGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHByb2plY3RBcnJheVtpXS50aXRsZSA9IG5ld1RleHQ7XG59O1xuXG5mdW5jdGlvbiBlZGl0RGVzY3JpcHRpb24oZSwgcHJvamVjdEFycmF5LCBpKSB7XG4gICAgY29uc3QgbmV3VGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHByb2plY3RBcnJheVtpXS5kZXNjcmlwdGlvbiA9IG5ld1RleHQ7XG59O1xuXG5mdW5jdGlvbiBhZGRUb2RvKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFwiZW50ZXIgYWN0aW9uXCIsIFwiaGlnaFwiLCBmYWxzZSk7XG4gICAgcHJvamVjdE5hbWUudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdE5hbWUpO1xufTtcblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhlLCBwcm9qZWN0TmFtZSwgaSkge1xuICAgIGxldCB0b2RvTGlzdCA9IHByb2plY3ROYW1lLnRvZG9zO1xuICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdE5hbWUpO1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2tCb3goZSwgcHJvamVjdE5hbWUsIGkpIHtcbiAgICBsZXQgdG9kb0l0ZW0gPSBwcm9qZWN0TmFtZS50b2Rvc1tpXTtcbiAgICBpZiAodG9kb0l0ZW0uY29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICB0b2RvSXRlbS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9JdGVtLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9O1xuICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG59O1xuXG4vLyBPdGhlciBmdW5jdGlvbnNcbmZ1bmN0aW9uIHJlbG9hZENhcmRzKHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgUHJvamVjdHMnO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gICAgY29uc3Qgb3RoZXJDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG90aGVyQ2FyZHMuY2xhc3NMaXN0LmFkZCgnb3RoZXItcHJvamVjdHMnKTtcblxuICAgIGxldCBhbm5vdW5jZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYW5ub3VuY2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQW5vdW5jZW1lbnRzJztcbiAgICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKGFubm91bmNlSGVhZGVyKTtcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW5ub3VuY2VtZW50cy5jbGFzc0xpc3QuYWRkKCdhbm5vdW5jZW1lbnRzJyk7XG4gICAgYW5ub3VuY2VtZW50cy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgQW5ub3VuY2VtZW50c1wiO1xuXG4gICAgLy8gYWRkIGR1bW15IGFubm91bmNlbWVudCBjb250ZW50XG5cbiAgICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKGFubm91bmNlbWVudHMpO1xuXG4gICAgbGV0IHRyZW5kaW5nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0cmVuZGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdUcmVuZGluZyc7XG4gICAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZCh0cmVuZGluZ0hlYWRlcik7XG4gICAgY29uc3QgdHJlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCd0cmVuZGluZycpO1xuICAgIHRyZW5kaW5nLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBUcmVuZGluZ1wiO1xuXG4gICAgLy8gYWRkIGR1bW15IHRyZW5kaW5nIGNvbnRlbnRcblxuICAgIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdGhlckNhcmRzKTtcblxuICAgIHJlbmRlckNhcmQocHJvamVjdExpc3QpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9