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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7OztBQUdBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQSxrQ0FBa0MsOEJBQThCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2FyZCgpIHtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJTYW1wbGUgUHJvamVjdFwiLCBcIlNhbXBsZSBEZXNjcmlwdGlvblwiLCBbbmV3IFRvZG8oXCJvbmVcIiwgXCJoaWdoXCIsIGZhbHNlKV0pO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnNob3dUb2RvcygpKTtcblxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyQ2FyZChwcm9qZWN0cyk7XG5cbiAgICB9O1xuXG5mdW5jdGlvbiByZW5kZXJDYXJkKHByb2plY3RzKSB7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhjYXJkcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkJyk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcbiAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgY2FyZFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXRUaXRsZShlLCBwcm9qZWN0cywgaSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY2FyZERlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICBjYXJkRGVzYy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0RGVzY3JpcHRpb24oZSwgcHJvamVjdHMsIGkpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYyk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2V0dGluZ3MnKTtcbiAgICBcbiAgICAgICAgbGV0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGFkZC5zcmMgPSAnLi4vYXNzZXRzL3N0YXItcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChhZGQpO1xuICAgIFxuICAgICAgICBsZXQgd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB3YXRjaC5zcmMgPSAnLi4vYXNzZXRzL2V5ZS1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICAgICAgd2F0Y2guc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQod2F0Y2gpO1xuICAgIFxuICAgICAgICBsZXQgZm9yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGZvcmsuc3JjID0gJy4uL2Fzc2V0cy9zb3VyY2UtZm9yay5zdmcnO1xuICAgICAgICBmb3JrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgZm9yay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdHNbaV0pO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChmb3JrKTtcbiAgICBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkU2V0dGluZ3MpO1xuXG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY2FyZHM7XG59O1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH07XG4gICAgc2hvd1RvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG5cbn07XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9OYW1lLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IHRvZG9OYW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9O1xuICAgIHVwZGF0ZVRhc2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtcycpO1xuICAgIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudGl0bGU7XG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNsb3NlLnNyYyA9ICcuLi9hc3NldHMvY2xvc2Uuc3ZnJztcbiAgICAgICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWxvYWRDYXJkcyhwcm9qZWN0cyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvLWxpc3QnKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRvZG9JdGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWUudG9kb3NbaV0udG9kb05hbWV9YDtcbiAgICAgICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICB0b2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0VG9kbyhlLCBwcm9qZWN0TmFtZS50b2RvcywgaSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZS50b2Rvc1tpXSk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZCh0b2RvSXRlbSk7XG4gICAgfTtcblxuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUaXRsZShlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdEFycmF5W2ldLnRpdGxlID0gbmV3VGV4dDtcbn07XG5cbmZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbihlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdEFycmF5W2ldLmRlc2NyaXB0aW9uID0gbmV3VGV4dDtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKGUsIHRvZG9MaXN0LCBpKSB7XG4gICAgY29uc3QgbmV3VGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHRvZG9MaXN0W2ldID0gbmV3VGV4dDtcbn07XG5cblxuLy8gT3RoZXIgZnVuY3Rpb25zXG5mdW5jdGlvbiByZWxvYWRDYXJkcyhwcm9qZWN0TGlzdCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIFByb2plY3RzJztcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNhcmRzKTtcblxuICAgIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdGhlckNhcmRzLmNsYXNzTGlzdC5hZGQoJ290aGVyLXByb2plY3RzJyk7XG5cbiAgICBsZXQgYW5ub3VuY2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFubm91bmNlSGVhZGVyLnRleHRDb250ZW50ID0gJ0Fub3VuY2VtZW50cyc7XG4gICAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZUhlYWRlcik7XG4gICAgY29uc3QgYW5ub3VuY2VtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFubm91bmNlbWVudHMuY2xhc3NMaXN0LmFkZCgnYW5ub3VuY2VtZW50cycpO1xuICAgIGFubm91bmNlbWVudHMudGV4dENvbnRlbnQgPSBcIkhvbGQgZm9yIEFubm91bmNlbWVudHNcIjtcblxuICAgIC8vIGFkZCBkdW1teSBhbm5vdW5jZW1lbnQgY29udGVudFxuXG4gICAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRzKTtcblxuICAgIGxldCB0cmVuZGluZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdHJlbmRpbmdIZWFkZXIudGV4dENvbnRlbnQgPSAnVHJlbmRpbmcnO1xuICAgIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmdIZWFkZXIpO1xuICAgIGNvbnN0IHRyZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJlbmRpbmcuY2xhc3NMaXN0LmFkZCgndHJlbmRpbmcnKTtcbiAgICB0cmVuZGluZy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgVHJlbmRpbmdcIjtcblxuICAgIC8vIGFkZCBkdW1teSB0cmVuZGluZyBjb250ZW50XG5cbiAgICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKHRyZW5kaW5nKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3RoZXJDYXJkcyk7XG5cbiAgICByZW5kZXJDYXJkKHByb2plY3RMaXN0KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==