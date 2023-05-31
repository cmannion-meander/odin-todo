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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDYXJkKCkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcIlNhbXBsZSBQcm9qZWN0XCIsIFwiU2FtcGxlIERlc2NyaXB0aW9uXCIsIFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCJdKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdC5zaG93VG9kb3MoKSk7XG5cbiAgICByZXR1cm4gcmVuZGVyQ2FyZChuZXdQcm9qZWN0KTtcblxuICAgIH07XG5cbmZ1bmN0aW9uIHJlbmRlckNhcmQocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQnKTtcblxuICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnRpdGxlO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcblxuICAgIGxldCBjYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXJkRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLmRlc2NyaXB0aW9uO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2MpO1xuXG4gICAgY29uc3QgY2FyZFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2V0dGluZ3MnKTtcblxuICAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZC5zcmMgPSAnLi4vYXNzZXRzL3N0YXItcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgYWRkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgIGxldCB3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgd2F0Y2guc3JjID0gJy4uL2Fzc2V0cy9leWUtcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgd2F0Y2guc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZCh3YXRjaCk7XG5cbiAgICBsZXQgZm9yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm9yay5zcmMgPSAnLi4vYXNzZXRzL3NvdXJjZS1mb3JrLnN2Zyc7XG4gICAgZm9yay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgZm9yay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG4gICAgfSwgZmFsc2UpO1xuICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChmb3JrKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFNldHRpbmdzKTtcblxuICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgcmV0dXJuIGNhcmRzO1xufTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH07XG4gICAgc2hvd1RvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtcycpO1xuICAgIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudGl0bGU7O1xuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvLWxpc3QnKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRvZG9JdGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWUudG9kb3NbaV19YDtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUudG9kb3NbaV0pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmQodG9kb0l0ZW0pO1xuICAgIH07XG5cbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbXMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9