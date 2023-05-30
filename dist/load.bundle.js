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
  !*** ./src/load.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadUI)
/* harmony export */ });
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZFNpZGViYXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZENvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICB9XG5cbmZ1bmN0aW9uIGxvYWRTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgY29uc3QgbWFpbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsJ21haW4tbG9nbycpO1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ28uc3JjID0gJy4uL2Fzc2V0cy9zb25hci1sb2dvLnN2Zyc7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ljb24nKTtcbiAgbGV0IGJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmQudGV4dENvbnRlbnQgPSAnU29uYXInO1xuICBtYWluTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQoYnJhbmQpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuXG4gIGNvbnN0IHRvcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRvcE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ25hdicpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2ZpbGUudGV4dENvbnRlbnQgPSAnUHJvZmlsZSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG4gIGNvbnN0IGVuZ2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgZW5nYWdlLnRleHRDb250ZW50ID0gJ0VuZ2FnZSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoZW5nYWdlKTtcbiAgY29uc3QgdGFsZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YWxlbnQudGV4dENvbnRlbnQgPSAnVGFsZW50JztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZCh0YWxlbnQpO1xuICBjb25zdCBpbnNpZ2h0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgaW5zaWdodHMudGV4dENvbnRlbnQgPSAnSW5zaWdodHMnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGluc2lnaHRzKTtcbiAgY29uc3QgY29tbXVuaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb21tdW5pdHkudGV4dENvbnRlbnQgPSAnQ29tbXVuaXR5JztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChjb21tdW5pdHkpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9wTWVudSk7XG5cbiAgY29uc3QgYm90dG9tTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgYm90dG9tTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2V0dGluZ3MnKTtcblxuICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgc2V0dGluZ3MudGV4dENvbnRlbnQgPSAnU2V0dGluZ3MnO1xuICBib3R0b21NZW51LmFwcGVuZENoaWxkKHNldHRpbmdzKTtcbiAgY29uc3Qgc3VwcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgc3VwcG9ydC50ZXh0Q29udGVudCA9ICdTdXBwb3J0JztcbiAgYm90dG9tTWVudS5hcHBlbmRDaGlsZChzdXBwb3J0KTtcbiAgY29uc3QgcHJpdmFjeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJpdmFjeS50ZXh0Q29udGVudCA9ICdQcml2YWN5JztcbiAgYm90dG9tTWVudS5hcHBlbmRDaGlsZChwcml2YWN5KTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGJvdHRvbU1lbnUpO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufTtcblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTtcblxuICBsZXQgbWFnbmlmeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG1hZ25pZnkuc3JjID0gJy4uL2Fzc2V0cy9tYWduaWZ5LnN2Zyc7XG4gIG1hZ25pZnkuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvcC1pY29uJyk7XG4gIGxldCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCb3guc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICBzZWFyY2hCb3guc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NlYXJjaC1ib3gnKTtcblxuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQobWFnbmlmeSk7XG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuXG4gIGNvbnN0IGhlYWRlclRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyVG9vbHMuY2xhc3NMaXN0LmFkZChcImhlYWRlclRvb2xzXCIpO1xuXG4gIGxldCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgbmV3QnRuLnRleHRDb250ZW50ID1cIk5ldyBSZXFcIjtcbiAgXG5cbiAgbGV0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZmlsZVwiKTtcbiAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZVwiKTtcblxuICBsZXQgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbm90aWZpY2F0aW9uLnNyYyA9ICcuLi9hc3NldHMvYmVsbC1yaW5nLW91dGxpbmUuc3ZnJztcbiAgbm90aWZpY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgcHJvZmlsZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHByb2ZpbGVQaWMuc3JjID0gJy4uL2Fzc2V0cy9wcm9maWxlUGljLmpwZWcnO1xuICBwcm9maWxlUGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9maWxlLXBpYycpO1xuXG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbiAgcHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlUGljKTtcblxuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChuZXdCdG4pO1xuICBoZWFkZXJUb29scy5hcHBlbmRDaGlsZChwcm9maWxlKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRvb2xzKTtcblxuICByZXR1cm4gaGVhZGVyO1xuXG59O1xuXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBQcm9qZWN0cyc7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3RoZXJDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdGhlci1wcm9qZWN0cycpO1xuXG4gIGxldCBhbm5vdW5jZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFubm91bmNlSGVhZGVyLnRleHRDb250ZW50ID0gJ0Fub3VuY2VtZW50cyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQoYW5ub3VuY2VIZWFkZXIpO1xuICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFubm91bmNlbWVudHMuY2xhc3NMaXN0LmFkZCgnYW5ub3VuY2VtZW50cycpO1xuICBhbm5vdW5jZW1lbnRzLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBBbm5vdW5jZW1lbnRzXCI7XG5cbiAgLy8gYWRkIGR1bW15IGFubm91bmNlbWVudCBjb250ZW50XG5cbiAgb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRzKTtcblxuICBsZXQgdHJlbmRpbmdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0cmVuZGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdUcmVuZGluZyc7XG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmdIZWFkZXIpO1xuICBjb25zdCB0cmVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCd0cmVuZGluZycpO1xuICB0cmVuZGluZy50ZXh0Q29udGVudCA9IFwiSG9sZCBmb3IgVHJlbmRpbmdcIjtcblxuICAvLyBhZGQgZHVtbXkgdHJlbmRpbmcgY29udGVudFxuXG4gIG90aGVyQ2FyZHMuYXBwZW5kQ2hpbGQodHJlbmRpbmcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG90aGVyQ2FyZHMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=