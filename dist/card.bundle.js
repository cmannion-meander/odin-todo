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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2FyZCgpIHtcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZCcpO1xuXG4gICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ1N1cGVyIGNvb2wgcHJvamVjdCc7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuXG4gICAgbGV0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcmREZXNjLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gTnVuYyBzY2VsZXJpc3F1ZSB2aXZlcnJhIG1hdXJpcyBpbiBhbGlxdWFtIHNlbS4gTnVuYyBtYXR0aXMgZW5pbSB1dCB0ZWxsdXMgZWxlbWVudHVtLlwiXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYyk7XG5cbiAgICBjb25zdCBjYXJkU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkU2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnY2FyZC1zZXR0aW5ncycpO1xuXG4gICAgbGV0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkLnNyYyA9ICcuLi9hc3NldHMvc3Rhci1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICBhZGQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgbGV0IHdhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB3YXRjaC5zcmMgPSAnLi4vYXNzZXRzL2V5ZS1wbHVzLW91dGxpbmUuc3ZnJztcbiAgICB3YXRjaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgY2FyZFNldHRpbmdzLmFwcGVuZENoaWxkKHdhdGNoKTtcblxuICAgIGxldCBmb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb3JrLnNyYyA9ICcuLi9hc3NldHMvc291cmNlLWZvcmsuc3ZnJztcbiAgICBmb3JrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQoZm9yayk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRTZXR0aW5ncyk7XG5cbiAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBcbiAgICByZXR1cm4gY2FyZHM7XG5cbiAgICB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==