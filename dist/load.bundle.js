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

    const cards = document.querySelector('.cards');

    const card = document.createElement('div');
    card.setAttribute('class','card');

    let cardTitle = document.createElement('h3');
    cardTitle.textContent = 'Super cool project';
    card.appendChild(cardTitle);

    let cardDesc = document.createElement('p');
    cardDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem. Nunc mattis enim ut tellus elementum."
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
    cardSettings.appendChild(fork);

    card.appendChild(cardSettings);

    cards.appendChild(card);
    
    return cards;

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

  const container = document.querySelector('.container')

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVqQjs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDYXJkKCkge1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkJyk7XG5cbiAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnU3VwZXIgY29vbCBwcm9qZWN0JztcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICBsZXQgY2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FyZERlc2MudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBOdW5jIHNjZWxlcmlzcXVlIHZpdmVycmEgbWF1cmlzIGluIGFsaXF1YW0gc2VtLiBOdW5jIG1hdHRpcyBlbmltIHV0IHRlbGx1cyBlbGVtZW50dW0uXCJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjKTtcblxuICAgIGNvbnN0IGNhcmRTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdjYXJkLXNldHRpbmdzJyk7XG5cbiAgICBsZXQgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGQuc3JjID0gJy4uL2Fzc2V0cy9zdGFyLXBsdXMtb3V0bGluZS5zdmcnO1xuICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgICBsZXQgd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHdhdGNoLnNyYyA9ICcuLi9hc3NldHMvZXllLXBsdXMtb3V0bGluZS5zdmcnO1xuICAgIHdhdGNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQod2F0Y2gpO1xuXG4gICAgbGV0IGZvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvcmsuc3JjID0gJy4uL2Fzc2V0cy9zb3VyY2UtZm9yay5zdmcnO1xuICAgIGZvcmsuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChmb3JrKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFNldHRpbmdzKTtcblxuICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIFxuICAgIHJldHVybiBjYXJkcztcblxuICAgIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkQ2FyZCBmcm9tICcuL2NhcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVUkoKSB7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRTaWRlYmFyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDb250ZW50KCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbiAgfVxuXG5mdW5jdGlvbiBsb2FkU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Mb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtYWluLWxvZ28nKTtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2dvLnNyYyA9ICcuLi9hc3NldHMvc29uYXItbG9nby5zdmcnO1xuICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpY29uJyk7XG4gIGxldCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kLnRleHRDb250ZW50ID0gJ1NvbmFyJztcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1haW5Mb2dvLmFwcGVuZENoaWxkKGJyYW5kKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICBjb25zdCB0b3BNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b3BNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXYnKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9maWxlLnRleHRDb250ZW50ID0gJ1Byb2ZpbGUnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBjb25zdCBlbmdhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGVuZ2FnZS50ZXh0Q29udGVudCA9ICdFbmdhZ2UnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGVuZ2FnZSk7XG4gIGNvbnN0IHRhbGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFsZW50LnRleHRDb250ZW50ID0gJ1RhbGVudCc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQodGFsZW50KTtcbiAgY29uc3QgaW5zaWdodHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGluc2lnaHRzLnRleHRDb250ZW50ID0gJ0luc2lnaHRzJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChpbnNpZ2h0cyk7XG4gIGNvbnN0IGNvbW11bml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29tbXVuaXR5LnRleHRDb250ZW50ID0gJ0NvbW11bml0eSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoY29tbXVuaXR5KTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvcE1lbnUpO1xuXG4gIGNvbnN0IGJvdHRvbU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJvdHRvbU1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NldHRpbmdzJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHNldHRpbmdzLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcbiAgYm90dG9tTWVudS5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG4gIGNvbnN0IHN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHN1cHBvcnQudGV4dENvbnRlbnQgPSAnU3VwcG9ydCc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQoc3VwcG9ydCk7XG4gIGNvbnN0IHByaXZhY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByaXZhY3kudGV4dENvbnRlbnQgPSAnUHJpdmFjeSc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQocHJpdmFjeSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChib3R0b21NZW51KTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG5cbiAgbGV0IG1hZ25pZnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtYWduaWZ5LnNyYyA9ICcuLi9hc3NldHMvbWFnbmlmeS5zdmcnO1xuICBtYWduaWZ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZWFyY2gtYm94Jyk7XG5cbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKG1hZ25pZnkpO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuICBjb25zdCBoZWFkZXJUb29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclRvb2xzLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJUb29sc1wiKTtcblxuICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIG5ld0J0bi50ZXh0Q29udGVudCA9XCJOZXcgUmVxXCI7XG4gIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2FyZCwgZmFsc2UpO1xuICBcbiAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZmlsZVwiKTtcbiAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcblxuICBsZXQgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbm90aWZpY2F0aW9uLnNyYyA9ICcuLi9hc3NldHMvYmVsbC1yaW5nLW91dGxpbmUuc3ZnJztcbiAgbm90aWZpY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgcHJvZmlsZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHByb2ZpbGVQaWMuc3JjID0gJy4uL2Fzc2V0cy9wcm9maWxlUGljLmpwZWcnO1xuICBwcm9maWxlUGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9maWxlLXBpYycpO1xuXG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbiAgcHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlUGljKTtcblxuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChuZXdCdG4pO1xuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChwcm9maWxlKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRvb2xzKTtcblxuICByZXR1cm4gaGVhZGVyO1xuXG59O1xuXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBQcm9qZWN0cyc7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3RoZXJDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdGhlci1wcm9qZWN0cycpO1xuXG4gIGxldCBhbm5vdW5jZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFubm91bmNlSGVhZGVyLnRleHRDb250ZW50ID0gJ0Fub3VuY2VtZW50cyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VIZWFkZXIpO1xuICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFubm91bmNlbWVudHMuY2xhc3NMaXN0LmFkZCgnYW5ub3VuY2VtZW50cycpO1xuICBhbm5vdW5jZW1lbnRzLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBBbm5vdW5jZW1lbnRzXCI7XG5cbiAgLy8gYWRkIGR1bW15IGFubm91bmNlbWVudCBjb250ZW50XG5cbiAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRzKTtcblxuICBsZXQgdHJlbmRpbmdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0cmVuZGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdUcmVuZGluZyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmdIZWFkZXIpO1xuICBjb25zdCB0cmVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCd0cmVuZGluZycpO1xuICB0cmVuZGluZy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgVHJlbmRpbmdcIjtcblxuICAvLyBhZGQgZHVtbXkgdHJlbmRpbmcgY29udGVudFxuXG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG90aGVyQ2FyZHMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=