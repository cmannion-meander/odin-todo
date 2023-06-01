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
  home.addEventListener("click", loadUI, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7OztBQUdBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQSxrQ0FBa0MsOEJBQThCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzdNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVqQjs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnREFBTztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDYXJkKCkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcIlNhbXBsZSBQcm9qZWN0XCIsIFwiU2FtcGxlIERlc2NyaXB0aW9uXCIsIFtuZXcgVG9kbyhcIm9uZVwiLCBcImhpZ2hcIiwgZmFsc2UpXSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3Quc2hvd1RvZG9zKCkpO1xuXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuICAgIHJldHVybiByZW5kZXJDYXJkKHByb2plY3RzKTtcblxuICAgIH07XG5cbmZ1bmN0aW9uIHJlbmRlckNhcmQocHJvamVjdHMpIHtcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNhcmRzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQnKTtcbiAgICBcbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnRpdGxlO1xuICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICBjYXJkVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gZWRpdFRpdGxlKGUsIHByb2plY3RzLCBpKSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBcbiAgICAgICAgbGV0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBjYXJkRGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIGNhcmREZXNjLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXREZXNjcmlwdGlvbihlLCBwcm9qZWN0cywgaSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjKTtcbiAgICBcbiAgICAgICAgbGV0IGNhcmRTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnY2FyZC1zZXR0aW5ncycpO1xuICAgIFxuICAgICAgICBsZXQgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgYWRkLnNyYyA9ICcuLi9hc3NldHMvc3Rhci1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICAgICAgYWRkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgXG4gICAgICAgIGxldCB3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHdhdGNoLnNyYyA9ICcuLi9hc3NldHMvZXllLXBsdXMtb3V0bGluZS5zdmcnO1xuICAgICAgICB3YXRjaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZCh3YXRjaCk7XG4gICAgXG4gICAgICAgIGxldCBmb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZm9yay5zcmMgPSAnLi4vYXNzZXRzL3NvdXJjZS1mb3JrLnN2Zyc7XG4gICAgICAgIGZvcmsuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBmb3JrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0c1tpXSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKGZvcmspO1xuICAgIFxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTZXR0aW5ncyk7XG5cbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfTtcblxuICAgIHJldHVybiBjYXJkcztcbn07XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9zKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfTtcbiAgICBzaG93VG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICAgIH1cblxufTtcblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodG9kb05hbWUsIHByaW9yaXR5LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH07XG4gICAgdXBkYXRlVGFzaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcblxuICAgIGNvbnN0IHRvZG9JdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9JdGVtcy5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW1zJyk7XG4gICAgbGV0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS50aXRsZTtcbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY2xvc2Uuc3JjID0gJy4uL2Fzc2V0cy9jbG9zZS5zdmcnO1xuICAgICAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbG9hZENhcmRzKHByb2plY3RzKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tbGlzdCcpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROYW1lLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdG9kb0l0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZS50b2Rvc1tpXS50b2RvTmFtZX1gO1xuICAgICAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIHRvZG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IGVkaXRUb2RvKGUsIHByb2plY3ROYW1lLnRvZG9zLCBpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLnRvZG9zW2ldKTtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kKHRvZG9JdGVtKTtcbiAgICB9O1xuXG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTtcblxuZnVuY3Rpb24gZWRpdFRpdGxlKGUsIHByb2plY3RBcnJheSwgaSkge1xuICAgIGNvbnN0IG5ld1RleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBwcm9qZWN0QXJyYXlbaV0udGl0bGUgPSBuZXdUZXh0O1xufTtcblxuZnVuY3Rpb24gZWRpdERlc2NyaXB0aW9uKGUsIHByb2plY3RBcnJheSwgaSkge1xuICAgIGNvbnN0IG5ld1RleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBwcm9qZWN0QXJyYXlbaV0uZGVzY3JpcHRpb24gPSBuZXdUZXh0O1xufTtcblxuZnVuY3Rpb24gZWRpdFRvZG8oZSwgdG9kb0xpc3QsIGkpIHtcbiAgICBjb25zdCBuZXdUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdG9kb0xpc3RbaV0gPSBuZXdUZXh0O1xufTtcblxuXG4vLyBPdGhlciBmdW5jdGlvbnNcbmZ1bmN0aW9uIHJlbG9hZENhcmRzKHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgUHJvamVjdHMnO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gICAgY29uc3Qgb3RoZXJDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG90aGVyQ2FyZHMuY2xhc3NMaXN0LmFkZCgnb3RoZXItcHJvamVjdHMnKTtcblxuICAgIGxldCBhbm5vdW5jZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYW5ub3VuY2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQW5vdW5jZW1lbnRzJztcbiAgICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKGFubm91bmNlSGVhZGVyKTtcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW5ub3VuY2VtZW50cy5jbGFzc0xpc3QuYWRkKCdhbm5vdW5jZW1lbnRzJyk7XG4gICAgYW5ub3VuY2VtZW50cy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgQW5ub3VuY2VtZW50c1wiO1xuXG4gICAgLy8gYWRkIGR1bW15IGFubm91bmNlbWVudCBjb250ZW50XG5cbiAgICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKGFubm91bmNlbWVudHMpO1xuXG4gICAgbGV0IHRyZW5kaW5nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0cmVuZGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdUcmVuZGluZyc7XG4gICAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZCh0cmVuZGluZ0hlYWRlcik7XG4gICAgY29uc3QgdHJlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCd0cmVuZGluZycpO1xuICAgIHRyZW5kaW5nLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBUcmVuZGluZ1wiO1xuXG4gICAgLy8gYWRkIGR1bW15IHRyZW5kaW5nIGNvbnRlbnRcblxuICAgIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdGhlckNhcmRzKTtcblxuICAgIHJlbmRlckNhcmQocHJvamVjdExpc3QpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkQ2FyZCBmcm9tICcuL2NhcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVUkoKSB7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRTaWRlYmFyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDb250ZW50KCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbiAgfVxuXG5mdW5jdGlvbiBsb2FkU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Mb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtYWluLWxvZ28nKTtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2dvLnNyYyA9ICcuLi9hc3NldHMvc29uYXItbG9nby5zdmcnO1xuICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpY29uJyk7XG4gIGxldCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kLnRleHRDb250ZW50ID0gJ1NvbmFyJztcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1haW5Mb2dvLmFwcGVuZENoaWxkKGJyYW5kKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICBjb25zdCB0b3BNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b3BNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXYnKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkVUksIGZhbHNlKTtcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChob21lKTtcbiAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvZmlsZS50ZXh0Q29udGVudCA9ICdQcm9maWxlJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgY29uc3QgZW5nYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBlbmdhZ2UudGV4dENvbnRlbnQgPSAnRW5nYWdlJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChlbmdhZ2UpO1xuICBjb25zdCB0YWxlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhbGVudC50ZXh0Q29udGVudCA9ICdUYWxlbnQnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKHRhbGVudCk7XG4gIGNvbnN0IGluc2lnaHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBpbnNpZ2h0cy50ZXh0Q29udGVudCA9ICdJbnNpZ2h0cyc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoaW5zaWdodHMpO1xuICBjb25zdCBjb21tdW5pdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbW11bml0eS50ZXh0Q29udGVudCA9ICdDb21tdW5pdHknO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGNvbW11bml0eSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b3BNZW51KTtcblxuICBjb25zdCBib3R0b21NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBib3R0b21NZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZXR0aW5ncycpO1xuXG4gIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzZXR0aW5ncy50ZXh0Q29udGVudCA9ICdTZXR0aW5ncyc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuICBjb25zdCBzdXBwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzdXBwb3J0LnRleHRDb250ZW50ID0gJ1N1cHBvcnQnO1xuICBib3R0b21NZW51LmFwcGVuZENoaWxkKHN1cHBvcnQpO1xuICBjb25zdCBwcml2YWN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcml2YWN5LnRleHRDb250ZW50ID0gJ1ByaXZhY3knO1xuICBib3R0b21NZW51LmFwcGVuZENoaWxkKHByaXZhY3kpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYm90dG9tTWVudSk7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59O1xuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpO1xuXG4gIGxldCBtYWduaWZ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWFnbmlmeS5zcmMgPSAnLi4vYXNzZXRzL21hZ25pZnkuc3ZnJztcbiAgbWFnbmlmeS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9wLWljb24nKTtcbiAgbGV0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2VhcmNoLWJveCcpO1xuXG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChtYWduaWZ5KTtcbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG5cbiAgY29uc3QgaGVhZGVyVG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJUb29scy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyVG9vbHNcIik7XG5cbiAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld0J0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBuZXdCdG4udGV4dENvbnRlbnQgPVwiTmV3IFJlcVwiO1xuICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZENhcmQsIGZhbHNlKTtcbiAgXG4gIGxldCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2ZpbGVcIik7XG4gIHByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGVcIik7XG5cbiAgbGV0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5vdGlmaWNhdGlvbi5zcmMgPSAnLi4vYXNzZXRzL2JlbGwtcmluZy1vdXRsaW5lLnN2Zyc7XG4gIG5vdGlmaWNhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9wLWljb24nKTtcbiAgbGV0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwcm9maWxlUGljLnNyYyA9ICcuLi9hc3NldHMvcHJvZmlsZVBpYy5qcGVnJztcbiAgcHJvZmlsZVBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvZmlsZS1waWMnKTtcblxuICBwcm9maWxlLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZVBpYyk7XG5cbiAgaGVhZGVyVG9vbHMuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgaGVhZGVyVG9vbHMuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUb29scyk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcblxufTtcblxuZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgUHJvamVjdHMnO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGNhcmRzKTtcblxuICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG90aGVyQ2FyZHMuY2xhc3NMaXN0LmFkZCgnb3RoZXItcHJvamVjdHMnKTtcblxuICBsZXQgYW5ub3VuY2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhbm5vdW5jZUhlYWRlci50ZXh0Q29udGVudCA9ICdBbm91bmNlbWVudHMnO1xuICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKGFubm91bmNlSGVhZGVyKTtcbiAgY29uc3QgYW5ub3VuY2VtZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbm5vdW5jZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudHMnKTtcbiAgYW5ub3VuY2VtZW50cy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgQW5ub3VuY2VtZW50c1wiO1xuXG4gIC8vIGFkZCBkdW1teSBhbm5vdW5jZW1lbnQgY29udGVudFxuXG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50cyk7XG5cbiAgbGV0IHRyZW5kaW5nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdHJlbmRpbmdIZWFkZXIudGV4dENvbnRlbnQgPSAnVHJlbmRpbmcnO1xuICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKHRyZW5kaW5nSGVhZGVyKTtcbiAgY29uc3QgdHJlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHJlbmRpbmcuY2xhc3NMaXN0LmFkZCgndHJlbmRpbmcnKTtcbiAgdHJlbmRpbmcudGV4dENvbnRlbnQgPSBcIkhvbGQgZm9yIFRyZW5kaW5nXCI7XG5cbiAgLy8gYWRkIGR1bW15IHRyZW5kaW5nIGNvbnRlbnRcblxuICBvdGhlckNhcmRzLmFwcGVuZENoaWxkKHRyZW5kaW5nKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChvdGhlckNhcmRzKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=