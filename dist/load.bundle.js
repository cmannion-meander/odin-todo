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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZFNpZGViYXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbiAgfVxuXG5mdW5jdGlvbiBsb2FkU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Mb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtYWluLWxvZ28nKTtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2dvLnNyYyA9ICcuLi9hc3NldHMvc29uYXItbG9nby5zdmcnO1xuICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpY29uJyk7XG4gIGxldCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kLnRleHRDb250ZW50ID0gJ1NvbmFyJztcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1haW5Mb2dvLmFwcGVuZENoaWxkKGJyYW5kKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICBjb25zdCB0b3BNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b3BNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXYnKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9maWxlLnRleHRDb250ZW50ID0gJ1Byb2ZpbGUnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBjb25zdCBlbmdhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGVuZ2FnZS50ZXh0Q29udGVudCA9ICdFbmdhZ2UnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGVuZ2FnZSk7XG4gIGNvbnN0IHRhbGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFsZW50LnRleHRDb250ZW50ID0gJ1RhbGVudCc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQodGFsZW50KTtcbiAgY29uc3QgaW5zaWdodHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGluc2lnaHRzLnRleHRDb250ZW50ID0gJ0luc2lnaHRzJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChpbnNpZ2h0cyk7XG4gIGNvbnN0IGNvbW11bml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29tbXVuaXR5LnRleHRDb250ZW50ID0gJ0NvbW11bml0eSc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoY29tbXVuaXR5KTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvcE1lbnUpO1xuXG4gIGNvbnN0IGJvdHRvbU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJvdHRvbU1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3NldHRpbmdzJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHNldHRpbmdzLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcbiAgYm90dG9tTWVudS5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG4gIGNvbnN0IHN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHN1cHBvcnQudGV4dENvbnRlbnQgPSAnU3VwcG9ydCc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQoc3VwcG9ydCk7XG4gIGNvbnN0IHByaXZhY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByaXZhY3kudGV4dENvbnRlbnQgPSAnUHJpdmFjeSc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQocHJpdmFjeSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChib3R0b21NZW51KTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG5cbiAgbGV0IG1hZ25pZnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtYWduaWZ5LnNyYyA9ICcuLi9hc3NldHMvbWFnbmlmeS5zdmcnO1xuICBtYWduaWZ5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b3AtaWNvbicpO1xuICBsZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZWFyY2gtYm94Jyk7XG5cbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKG1hZ25pZnkpO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuICBjb25zdCBoZWFkZXJUb29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclRvb2xzLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJUb29sc1wiKTtcblxuICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIG5ld0J0bi50ZXh0Q29udGVudCA9XCJOZXcgUmVxXCI7XG4gIFxuXG4gIGxldCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2ZpbGVcIik7XG4gIHByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGVcIik7XG5cbiAgbGV0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5vdGlmaWNhdGlvbi5zcmMgPSAnLi4vYXNzZXRzL2JlbGwtcmluZy1vdXRsaW5lLnN2Zyc7XG4gIG5vdGlmaWNhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9wLWljb24nKTtcbiAgbGV0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwcm9maWxlUGljLnNyYyA9ICcuLi9hc3NldHMvcHJvZmlsZVBpYy5qcGVnJztcbiAgcHJvZmlsZVBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvZmlsZS1waWMnKTtcblxuICBwcm9maWxlLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZVBpYyk7XG5cbiAgaGVhZGVyVG9vbHMuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgaGVhZGVyVG9vbHMuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUb29scyk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcblxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=