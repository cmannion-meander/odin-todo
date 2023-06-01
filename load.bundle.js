/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadUI)
/* harmony export */ });
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ "./src/card.js");


function loadUI() {

  const container = document.querySelector('.container');
  removeAllChildNodes(container);

  container.appendChild(loadSidebar());
  container.appendChild(loadHeader());
  container.appendChild(loadContent());

  return container;

  }

function loadSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add("sidebar");

  const mainLogo = document.createElement('div');
  mainLogo.setAttribute('class','main-logo');
  let logo = document.createElement("img");
  logo.src = '../assets/sonar-logo.svg';
  logo.setAttribute('class','icon');
  let brand = document.createElement('h1');
  brand.textContent = 'Sonar';
  mainLogo.appendChild(logo);
  mainLogo.appendChild(brand);

  sidebar.appendChild(mainLogo);

  const topMenu = document.createElement("ul");
  topMenu.setAttribute('class','nav');

  const home = document.createElement("li");
  home.textContent = 'Home';
  // home.addEventListener("click", loadUI, false);
  topMenu.appendChild(home);
  const profile = document.createElement("li");
  profile.textContent = 'Profile';
  topMenu.appendChild(profile);
  const engage = document.createElement("li");
  engage.textContent = 'Engage';
  topMenu.appendChild(engage);
  const talent = document.createElement("li");
  talent.textContent = 'Talent';
  topMenu.appendChild(talent);
  const insights = document.createElement("li");
  insights.textContent = 'Insights';
  topMenu.appendChild(insights);
  const community = document.createElement("li");
  community.textContent = 'Community';
  topMenu.appendChild(community);

  sidebar.appendChild(topMenu);

  const bottomMenu = document.createElement("ul");
  bottomMenu.setAttribute('class','settings');

  const settings = document.createElement("li");
  settings.textContent = 'Settings';
  bottomMenu.appendChild(settings);
  const support = document.createElement("li");
  support.textContent = 'Support';
  bottomMenu.appendChild(support);
  const privacy = document.createElement("li");
  privacy.textContent = 'Privacy';
  bottomMenu.appendChild(privacy);

  sidebar.appendChild(bottomMenu);

  return sidebar;
};

function loadHeader() {
  const header = document.createElement('div');
  header.classList.add("header");

  const searchBar = document.createElement('div');
  searchBar.classList.add("search");

  let magnify = document.createElement("img");
  magnify.src = '../assets/magnify.svg';
  magnify.setAttribute('class','top-icon');
  let searchBox = document.createElement('input');
  searchBox.setAttribute('type','text');
  searchBox.setAttribute('class','search-box');

  searchBar.appendChild(magnify);
  searchBar.appendChild(searchBox);

  const headerTools = document.createElement("div");
  headerTools.classList.add("headerTools");

  let newBtn = document.createElement("button");
  newBtn.classList.add("button");
  newBtn.textContent ="New Req";
  newBtn.addEventListener("click", _card_js__WEBPACK_IMPORTED_MODULE_0__["default"], false);
  
  let profile = document.createElement("profile");
  profile.classList.add("profile");

  let notification = document.createElement("img");
  notification.src = '../assets/bell-ring-outline.svg';
  notification.setAttribute('class','top-icon');
  let profilePic = document.createElement("img");
  profilePic.src = '../assets/profilePic.jpeg';
  profilePic.setAttribute('class','profile-pic');

  profile.appendChild(notification);
  profile.appendChild(profilePic);

  headerTools.appendChild(newBtn);
  headerTools.appendChild(profile);

  header.appendChild(searchBar);
  header.appendChild(headerTools);

  return header;

};

function loadContent() {
  const content = document.createElement('div');
  content.classList.add('content');

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

  return content;
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnREFBTztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDYXJkKCkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcIlNhbXBsZSBQcm9qZWN0XCIsIFwiU2FtcGxlIERlc2NyaXB0aW9uXCIsIFtuZXcgVG9kbyhcIm9uZVwiLCBcImhpZ2hcIiwgZmFsc2UpLCBuZXcgVG9kbyhcInR3b1wiLCBcImhpZ2hcIiwgdHJ1ZSksIG5ldyBUb2RvKFwidGhyZWVcIiwgXCJoaWdoXCIsIGZhbHNlKV0pO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnNob3dUb2RvcygpKTtcblxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICByZXR1cm4gcmVuZGVyQ2FyZChwcm9qZWN0cyk7XG5cbiAgICB9O1xuXG5mdW5jdGlvbiByZW5kZXJDYXJkKHByb2plY3RzKSB7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhjYXJkcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkJyk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcbiAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgY2FyZFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXRUaXRsZShlLCBwcm9qZWN0cywgaSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY2FyZERlc2Muc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICBjYXJkRGVzYy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0RGVzY3JpcHRpb24oZSwgcHJvamVjdHMsIGkpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYyk7XG4gICAgXG4gICAgICAgIGxldCBjYXJkU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2V0dGluZ3MnKTtcbiAgICBcbiAgICAgICAgbGV0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGFkZC5zcmMgPSAnLi4vYXNzZXRzL3N0YXItcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChhZGQpO1xuICAgIFxuICAgICAgICBsZXQgd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB3YXRjaC5zcmMgPSAnLi4vYXNzZXRzL2V5ZS1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICAgICAgd2F0Y2guc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQod2F0Y2gpO1xuICAgIFxuICAgICAgICBsZXQgZm9yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGZvcmsuc3JjID0gJy4uL2Fzc2V0cy9zb3VyY2UtZm9yay5zdmcnO1xuICAgICAgICBmb3JrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgZm9yay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdHNbaV0pO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChmb3JrKTtcbiAgICBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkU2V0dGluZ3MpO1xuXG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY2FyZHM7XG59O1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH07XG4gICAgc2hvd1RvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG5cbn07XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9OYW1lLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IHRvZG9OYW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9O1xuICAgIC8vIHVwZGF0ZVRhc2soKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLmNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgIC8vICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgLy8gICAgIH07XG4gICAgLy8gfTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtcycpO1xuICAgIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudGl0bGU7XG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNsb3NlLnNyYyA9ICcuLi9hc3NldHMvY2xvc2Uuc3ZnJztcbiAgICAgICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWxvYWRDYXJkcyhwcm9qZWN0cyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGxldCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLmRlc2NyaXB0aW9uO1xuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tbGlzdCcpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUudG9kb3MpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROYW1lLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtaXRlbVwiKTtcblxuICAgICAgICBsZXQgdG9kb0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xuICAgICAgICB0b2RvQ2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICB0b2RvQ2hlY2tCb3guY2hlY2tlZCA9IHByb2plY3ROYW1lLnRvZG9zW2ldLmNvbXBsZXRlO1xuICAgICAgICB0b2RvQ2hlY2tCb3guY2xhc3NMaXN0LmFkZChcInRvZG8tY29tcGxldGVcIik7XG4gICAgICAgIHRvZG9DaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdG9nZ2xlQ2hlY2tCb3goZSwgcHJvamVjdE5hbWUsIGkpKTtcblxuICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZS50b2Rvc1tpXS50b2RvTmFtZX1gO1xuICAgICAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICB0b2RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gZWRpdFRvZG9UaXRsZShlLCBwcm9qZWN0TmFtZS50b2RvcywgaSkpO1xuXG4gICAgICAgIGxldCBkZWxUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsVG9kby5zcmMgPSAnLi4vYXNzZXRzL2Nsb3NlLnN2Zyc7XG4gICAgICAgIGRlbFRvZG8uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBkZWxUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGRlbGV0ZVRvZG8oZSwgcHJvamVjdE5hbWUsIGkpKTtcblxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tCb3gpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxUb2RvKTtcblxuICAgICAgICB0b2RvTGlzdC5hcHBlbmQodG9kb0l0ZW0pO1xuICAgIH07XG4gICAgXG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8nKTtcbiAgICBuZXdUb2RvLnRleHRDb250ZW50ID0gKCdBZGQgTmV3IEFjdGlvbiBJdGVtJyk7XG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gYWRkVG9kbyhwcm9qZWN0TmFtZSkpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUudG9kb3MpO1xuXG5cbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUaXRsZShlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdEFycmF5W2ldLnRpdGxlID0gbmV3VGV4dDtcbn07XG5cbmZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbihlLCBwcm9qZWN0QXJyYXksIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgcHJvamVjdEFycmF5W2ldLmRlc2NyaXB0aW9uID0gbmV3VGV4dDtcbn07XG5cbmZ1bmN0aW9uIGFkZFRvZG8ocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXCJlbnRlciBhY3Rpb25cIiwgXCJoaWdoXCIsIGZhbHNlKTtcbiAgICBwcm9qZWN0TmFtZS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUsIHByb2plY3ROYW1lLCBpKSB7XG4gICAgbGV0IHRvZG9MaXN0ID0gcHJvamVjdE5hbWUudG9kb3M7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG59O1xuXG5mdW5jdGlvbiB0b2dnbGVDaGVja0JveChlLCBwcm9qZWN0TmFtZSwgaSkge1xuICAgIGxldCB0b2RvSXRlbSA9IHByb2plY3ROYW1lLnRvZG9zW2ldO1xuICAgIGlmICh0b2RvSXRlbS5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgIHRvZG9JdGVtLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0l0ZW0uY29tcGxldGUgPSB0cnVlO1xuICAgIH07XG4gICAgZGlzcGxheVRvZG9MaXN0KHByb2plY3ROYW1lKTtcbn07XG5cbi8vIE90aGVyIGZ1bmN0aW9uc1xuZnVuY3Rpb24gcmVsb2FkQ2FyZHMocHJvamVjdExpc3QpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBQcm9qZWN0cyc7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjYXJkcyk7XG5cbiAgICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3RoZXJDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdGhlci1wcm9qZWN0cycpO1xuXG4gICAgbGV0IGFubm91bmNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhbm5vdW5jZUhlYWRlci50ZXh0Q29udGVudCA9ICdBbm91bmNlbWVudHMnO1xuICAgIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VIZWFkZXIpO1xuICAgIGNvbnN0IGFubm91bmNlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbm5vdW5jZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudHMnKTtcbiAgICBhbm5vdW5jZW1lbnRzLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBBbm5vdW5jZW1lbnRzXCI7XG5cbiAgICAvLyBhZGQgZHVtbXkgYW5ub3VuY2VtZW50IGNvbnRlbnRcblxuICAgIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50cyk7XG5cbiAgICBsZXQgdHJlbmRpbmdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRyZW5kaW5nSGVhZGVyLnRleHRDb250ZW50ID0gJ1RyZW5kaW5nJztcbiAgICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKHRyZW5kaW5nSGVhZGVyKTtcbiAgICBjb25zdCB0cmVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyZW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3RyZW5kaW5nJyk7XG4gICAgdHJlbmRpbmcudGV4dENvbnRlbnQgPSBcIkhvbGQgZm9yIFRyZW5kaW5nXCI7XG5cbiAgICAvLyBhZGQgZHVtbXkgdHJlbmRpbmcgY29udGVudFxuXG4gICAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZCh0cmVuZGluZyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG90aGVyQ2FyZHMpO1xuXG4gICAgcmVuZGVyQ2FyZChwcm9qZWN0TGlzdCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhZGRDYXJkIGZyb20gJy4vY2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZFNpZGViYXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZENvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICB9XG5cbmZ1bmN0aW9uIGxvYWRTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgY29uc3QgbWFpbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsJ21haW4tbG9nbycpO1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ28uc3JjID0gJy4uL2Fzc2V0cy9zb25hci1sb2dvLnN2Zyc7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ljb24nKTtcbiAgbGV0IGJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmQudGV4dENvbnRlbnQgPSAnU29uYXInO1xuICBtYWluTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQoYnJhbmQpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuXG4gIGNvbnN0IHRvcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRvcE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ25hdicpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIC8vIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRVSSwgZmFsc2UpO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9maWxlLnRleHRDb250ZW50ID0gJ1Byb2ZpbGUnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBjb25zdCBlbmdhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGVuZ2FnZS50ZXh0Q29udGVudCA9ICdFbmdhZ2UnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGVuZ2FnZSk7XG4gIGNvbnN0IHRhbGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFsZW50LnRleHRDb250ZW50ID0gJ1RhbGVudCc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQodGFsZW50KTtcbiAgY29uc3QgaW5zaWdodHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGluc2lnaHRzLnRleHRDb250ZW50ID0gJ0luc2lnaHRzJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChpbnNpZ2h0cyk7XG4gIGNvbnN0IGNvbW11bml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29tbXVuaXR5LnRleHRDb250ZW50ID0gJ0NvbW11bml0eSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoY29tbXVuaXR5KTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvcE1lbnUpO1xuXG4gIGNvbnN0IGJvdHRvbU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJvdHRvbU1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NldHRpbmdzJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHNldHRpbmdzLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcbiAgYm90dG9tTWVudS5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG4gIGNvbnN0IHN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHN1cHBvcnQudGV4dENvbnRlbnQgPSAnU3VwcG9ydCc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQoc3VwcG9ydCk7XG4gIGNvbnN0IHByaXZhY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByaXZhY3kudGV4dENvbnRlbnQgPSAnUHJpdmFjeSc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQocHJpdmFjeSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChib3R0b21NZW51KTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG5cbiAgbGV0IG1hZ25pZnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtYWduaWZ5LnNyYyA9ICcuLi9hc3NldHMvbWFnbmlmeS5zdmcnO1xuICBtYWduaWZ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZWFyY2gtYm94Jyk7XG5cbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKG1hZ25pZnkpO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuICBjb25zdCBoZWFkZXJUb29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclRvb2xzLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJUb29sc1wiKTtcblxuICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIG5ld0J0bi50ZXh0Q29udGVudCA9XCJOZXcgUmVxXCI7XG4gIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2FyZCwgZmFsc2UpO1xuICBcbiAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZmlsZVwiKTtcbiAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcblxuICBsZXQgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbm90aWZpY2F0aW9uLnNyYyA9ICcuLi9hc3NldHMvYmVsbC1yaW5nLW91dGxpbmUuc3ZnJztcbiAgbm90aWZpY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgcHJvZmlsZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHByb2ZpbGVQaWMuc3JjID0gJy4uL2Fzc2V0cy9wcm9maWxlUGljLmpwZWcnO1xuICBwcm9maWxlUGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9maWxlLXBpYycpO1xuXG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbiAgcHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlUGljKTtcblxuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChuZXdCdG4pO1xuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChwcm9maWxlKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRvb2xzKTtcblxuICByZXR1cm4gaGVhZGVyO1xuXG59O1xuXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBQcm9qZWN0cyc7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3RoZXJDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdGhlci1wcm9qZWN0cycpO1xuXG4gIGxldCBhbm5vdW5jZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFubm91bmNlSGVhZGVyLnRleHRDb250ZW50ID0gJ0Fub3VuY2VtZW50cyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VIZWFkZXIpO1xuICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFubm91bmNlbWVudHMuY2xhc3NMaXN0LmFkZCgnYW5ub3VuY2VtZW50cycpO1xuICBhbm5vdW5jZW1lbnRzLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBBbm5vdW5jZW1lbnRzXCI7XG5cbiAgLy8gYWRkIGR1bW15IGFubm91bmNlbWVudCBjb250ZW50XG5cbiAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRzKTtcblxuICBsZXQgdHJlbmRpbmdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0cmVuZGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdUcmVuZGluZyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmdIZWFkZXIpO1xuICBjb25zdCB0cmVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCd0cmVuZGluZycpO1xuICB0cmVuZGluZy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgVHJlbmRpbmdcIjtcblxuICAvLyBhZGQgZHVtbXkgdHJlbmRpbmcgY29udGVudFxuXG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG90aGVyQ2FyZHMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==