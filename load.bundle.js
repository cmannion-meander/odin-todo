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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRWpCOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZENhcmQoKSB7XG5cbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiU2FtcGxlIFByb2plY3RcIiwgXCJTYW1wbGUgRGVzY3JpcHRpb25cIiwgW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIl0pO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LnNob3dUb2RvcygpKTtcblxuICAgIHJldHVybiByZW5kZXJDYXJkKG5ld1Byb2plY3QpO1xuXG4gICAgfTtcblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZCcpO1xuXG4gICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudGl0bGU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuXG4gICAgbGV0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcmREZXNjLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUuZGVzY3JpcHRpb247XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYyk7XG5cbiAgICBjb25zdCBjYXJkU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkU2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnY2FyZC1zZXR0aW5ncycpO1xuXG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkLnNyYyA9ICcuLi9hc3NldHMvc3Rhci1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICBhZGQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgbGV0IHdhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB3YXRjaC5zcmMgPSAnLi4vYXNzZXRzL2V5ZS1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICB3YXRjaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKHdhdGNoKTtcblxuICAgIGxldCBmb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb3JrLnNyYyA9ICcuLi9hc3NldHMvc291cmNlLWZvcmsuc3ZnJztcbiAgICBmb3JrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICBmb3JrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0KHByb2plY3ROYW1lKTtcbiAgICB9LCBmYWxzZSk7XG4gICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKGZvcmspO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkU2V0dGluZ3MpO1xuXG4gICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICByZXR1cm4gY2FyZHM7XG59O1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHRvZG9zKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfTtcbiAgICBzaG93VG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcblxuICAgIGNvbnN0IHRvZG9JdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9JdGVtcy5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW1zJyk7XG4gICAgbGV0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRvZG9IZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS50aXRsZTs7XG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tbGlzdCcpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROYW1lLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdG9kb0l0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZS50b2Rvc1tpXX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZS50b2Rvc1tpXSk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZCh0b2RvSXRlbSk7XG4gICAgfTtcblxuICAgIHRvZG9JdGVtcy5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhZGRDYXJkIGZyb20gJy4vY2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGFpbmVyKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZFNpZGViYXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZENvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICB9XG5cbmZ1bmN0aW9uIGxvYWRTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgY29uc3QgbWFpbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsJ21haW4tbG9nbycpO1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ28uc3JjID0gJy4uL2Fzc2V0cy9zb25hci1sb2dvLnN2Zyc7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ljb24nKTtcbiAgbGV0IGJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmQudGV4dENvbnRlbnQgPSAnU29uYXInO1xuICBtYWluTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQoYnJhbmQpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuXG4gIGNvbnN0IHRvcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRvcE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ25hdicpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRVSSwgZmFsc2UpO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9maWxlLnRleHRDb250ZW50ID0gJ1Byb2ZpbGUnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBjb25zdCBlbmdhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGVuZ2FnZS50ZXh0Q29udGVudCA9ICdFbmdhZ2UnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGVuZ2FnZSk7XG4gIGNvbnN0IHRhbGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFsZW50LnRleHRDb250ZW50ID0gJ1RhbGVudCc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQodGFsZW50KTtcbiAgY29uc3QgaW5zaWdodHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGluc2lnaHRzLnRleHRDb250ZW50ID0gJ0luc2lnaHRzJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChpbnNpZ2h0cyk7XG4gIGNvbnN0IGNvbW11bml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29tbXVuaXR5LnRleHRDb250ZW50ID0gJ0NvbW11bml0eSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoY29tbXVuaXR5KTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvcE1lbnUpO1xuXG4gIGNvbnN0IGJvdHRvbU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJvdHRvbU1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NldHRpbmdzJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHNldHRpbmdzLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcbiAgYm90dG9tTWVudS5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG4gIGNvbnN0IHN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHN1cHBvcnQudGV4dENvbnRlbnQgPSAnU3VwcG9ydCc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQoc3VwcG9ydCk7XG4gIGNvbnN0IHByaXZhY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByaXZhY3kudGV4dENvbnRlbnQgPSAnUHJpdmFjeSc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQocHJpdmFjeSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChib3R0b21NZW51KTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG5cbiAgbGV0IG1hZ25pZnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtYWduaWZ5LnNyYyA9ICcuLi9hc3NldHMvbWFnbmlmeS5zdmcnO1xuICBtYWduaWZ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZWFyY2gtYm94Jyk7XG5cbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKG1hZ25pZnkpO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuICBjb25zdCBoZWFkZXJUb29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclRvb2xzLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJUb29sc1wiKTtcblxuICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIG5ld0J0bi50ZXh0Q29udGVudCA9XCJOZXcgUmVxXCI7XG4gIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2FyZCwgZmFsc2UpO1xuICBcbiAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZmlsZVwiKTtcbiAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcblxuICBsZXQgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbm90aWZpY2F0aW9uLnNyYyA9ICcuLi9hc3NldHMvYmVsbC1yaW5nLW91dGxpbmUuc3ZnJztcbiAgbm90aWZpY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgcHJvZmlsZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHByb2ZpbGVQaWMuc3JjID0gJy4uL2Fzc2V0cy9wcm9maWxlUGljLmpwZWcnO1xuICBwcm9maWxlUGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9maWxlLXBpYycpO1xuXG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbiAgcHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlUGljKTtcblxuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChuZXdCdG4pO1xuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChwcm9maWxlKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRvb2xzKTtcblxuICByZXR1cm4gaGVhZGVyO1xuXG59O1xuXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBQcm9qZWN0cyc7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3RoZXJDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdGhlci1wcm9qZWN0cycpO1xuXG4gIGxldCBhbm5vdW5jZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFubm91bmNlSGVhZGVyLnRleHRDb250ZW50ID0gJ0Fub3VuY2VtZW50cyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VIZWFkZXIpO1xuICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFubm91bmNlbWVudHMuY2xhc3NMaXN0LmFkZCgnYW5ub3VuY2VtZW50cycpO1xuICBhbm5vdW5jZW1lbnRzLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBBbm5vdW5jZW1lbnRzXCI7XG5cbiAgLy8gYWRkIGR1bW15IGFubm91bmNlbWVudCBjb250ZW50XG5cbiAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRzKTtcblxuICBsZXQgdHJlbmRpbmdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0cmVuZGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdUcmVuZGluZyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmdIZWFkZXIpO1xuICBjb25zdCB0cmVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCd0cmVuZGluZycpO1xuICB0cmVuZGluZy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgVHJlbmRpbmdcIjtcblxuICAvLyBhZGQgZHVtbXkgdHJlbmRpbmcgY29udGVudFxuXG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG90aGVyQ2FyZHMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==