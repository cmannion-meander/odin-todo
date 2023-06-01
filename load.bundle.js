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

    // let newProject = new Project("Sample Project", "Sample Description", [new Todo("one", "high", false), new Todo("two", "high", true), new Todo("three", "high", false)]);

    // console.log(newProject);

    // console.log(newProject.showTodos());

    // projects.push(newProject);

    generateNewProject();

    return renderCard(projects);

    };

let projects = [];

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

        let deleteCard = document.createElement("img");
        deleteCard.src = '../assets/trash-can-outline.svg';
        deleteCard.setAttribute('class','card-icon');
        deleteCard.addEventListener("click", e => deleteProject(e, projects, i));
        card.appendChild(deleteCard);
    
        let cardDesc = document.createElement('p');
        cardDesc.textContent = projects[i].description;
        cardDesc.classList.add('card-description');
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
        watch.addEventListener("click", generateSampleReqs, false);
        cardSettings.appendChild(watch);
    
        let fork = document.createElement("img");
        fork.src = '../assets/view-list-outline.svg';
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
    todoDesc.classList.add('card-description');
    todoDesc.textContent = projectName.description;
    todoItems.appendChild(todoDesc);

    const todoList = document.createElement("div");
    todoList.setAttribute('class','todo-list');

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

        let startTodo = document.createElement("img");
        startTodo.src = '../assets/pencil-outline.svg';
        startTodo.setAttribute('class','card-icon');

        let delTodo = document.createElement("img");
        delTodo.src = '../assets/trash-can-outline.svg';
        delTodo.setAttribute('class','card-icon');
        delTodo.addEventListener("click", e => deleteTodo(e, projectName, i));

        todoItem.appendChild(todoCheckBox);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(startTodo);
        todoItem.appendChild(delTodo);

        todoList.append(todoItem);
    };
    
    todoItems.appendChild(todoList);

    const newTodo = document.createElement("div");
    newTodo.classList.add('new-todo');
    newTodo.textContent = ('Add New Action Item');
    newTodo.addEventListener('click', e => addTodo(projectName));

    todoItems.appendChild(newTodo);

    content.appendChild(todoItems);

    return content;
};

function deleteProject(e, projectArray, i) {
    projectArray.splice(i, 1);
    renderCard(projectArray);
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
    projectHeader.textContent = 'Active Requisitions';
    projects.appendChild(projectHeader);

    const cards = document.createElement('div');
    cards.classList.add('cards');

    projects.appendChild(cards);

    const otherCards = document.createElement('div');
    otherCards.classList.add('other-projects');

    otherCards.innerHTML = `
    <h2>Team Announcements</h2>
      <div class="announcements">
          <ul>
              <li>
                  <h3>Source-a-thon</h3>
                  <p>Attention team: We are excited to announce that the team sourcing project will kick off on Monday, so get ready to collaborate and source some top talent!</p>
              </li>
              <hr class="solid">
              <li>
                  <h3>Welcome Bruce to the team!</h3>
                  <p>Join us in giving a warm welcome to Bruce, who joins our product team from Google, bringing valuable expertise and insights to our organization.</p>
              </li>
              <hr class="solid">
              <li>
                  <h3>New Employer Branding Resource</h3>
                  <p>We are proud to share that our recent feature on TechCrunch can now be utilized as a powerful employer branding resource, showcasing our company's innovation and culture.</p>
              </li>
          </ul>
      </div>
      <h2>Latest Hiring Activity</h2>
      <div class="trending">
          <img src="../assets/profile1.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Roger</h3>
              <p>Product Marketing Manager</p>
          </div>
          <img src="../assets/profile2.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Bruce</h3>
              <p>Senior Product Manager</p>
          </div>
          <img src="../assets/profile3.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Petra</h3>
              <p>Director, Software Engineering</p>
          </div>
          <img src="../assets/profile4.jpg" alt="" class="profile-pic-team">
          <div class="users">
              <h3>Logan</h3>
              <p>Account Executive</p>
          </div>
      </div>
`;

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

function generateNewProject() {
    let newProject = new Project("Enter Requisition Name", "Enter Summary Job Description", []);
    newProject.todos = generateRecruitingTodos();

    projects.push(newProject);
};

function generateRecruitingTodos() {
    let todoList = [
        new Todo("Role Kickoff", "high", false), 
        new Todo("Define Interview Scorecard", "high", false), 
        new Todo("Plan Interviews", "high", false),
        new Todo("Create Interview Process", "high", false), 
        new Todo("Source & Interview Candidates", "high", false), 
        new Todo("Generate Offer Letter", "high", false)
    ];
    return todoList;
}

function generateSampleReqs() {
    let growth = new Project("Growth Hacker", "Join our dynamic startup and revolutionize user acquisition and retention strategies through data-driven experimentation and innovative marketing campaigns.", []);
    growth.todos = generateRecruitingTodos();

    let fullstack = new Project("Full Stack Developer", "Be part of a cutting-edge startup and shape the future of our platform by designing and implementing scalable and robust software solutions across the entire technology stack.", []);
    fullstack.todos = generateRecruitingTodos();

    let customer = new Project("Customer Success Manager", "Help drive customer satisfaction and retention in our fast-growing startup by providing exceptional support, building relationships, and implementing success strategies.", []);
    customer.todos = generateRecruitingTodos();

    let product = new Project("Product Designer", "Join our talented team of designers and craft intuitive and visually stunning user experiences for our innovative product, making a meaningful impact on how users interact with our platform.", []);
    product.todos = generateRecruitingTodos();

    let ops = new Project("Operations Associate", "Play a crucial role in the day-to-day operations of our startup, ensuring smooth processes and efficiency across various departments, and contributing to our overall success and growth.", []);
    ops.todos = generateRecruitingTodos();

    projects.push(growth);
    projects.push(fullstack);
    projects.push(customer);
    projects.push(product);
    projects.push(ops);

    renderCard(projects);
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
  projectHeader.textContent = 'Active Requisitions';
  projects.appendChild(projectHeader);

  const cards = document.createElement('div');
  cards.classList.add('cards');

  projects.appendChild(cards);

  const otherCards = document.createElement('div');
  otherCards.classList.add('other-projects');

  otherCards.innerHTML = `
              <h2>Team Announcements</h2>
                <div class="announcements">
                    <ul>
                        <li>
                            <h3>Source-a-thon</h3>
                            <p>Attention team: We are excited to announce that the team sourcing project will kick off on Monday, so get ready to collaborate and source some top talent!</p>
                        </li>
                        <hr class="solid">
                        <li>
                            <h3>Welcome Bruce to the team!</h3>
                            <p>Join us in giving a warm welcome to Bruce, who joins our product team from Google, bringing valuable expertise and insights to our organization.</p>
                        </li>
                        <hr class="solid">
                        <li>
                            <h3>New Employer Branding Resource</h3>
                            <p>We are proud to share that our recent feature on TechCrunch can now be utilized as a powerful employer branding resource, showcasing our company's innovation and culture.</p>
                        </li>
                    </ul>
                </div>
                <h2>Latest Hiring Activity</h2>
                <div class="trending">
                    <img src="../assets/profile1.jpg" alt="" class="profile-pic-team">
                    <div class="users">
                        <h3>Roger</h3>
                        <p>Product Marketing Manager</p>
                    </div>
                    <img src="../assets/profile2.jpg" alt="" class="profile-pic-team">
                    <div class="users">
                        <h3>Bruce</h3>
                        <p>Senior Product Manager</p>
                    </div>
                    <img src="../assets/profile3.jpg" alt="" class="profile-pic-team">
                    <div class="users">
                        <h3>Petra</h3>
                        <p>Director, Software Engineering</p>
                    </div>
                    <img src="../assets/profile4.jpg" alt="" class="profile-pic-team">
                    <div class="users">
                        <h3>Logan</h3>
                        <p>Account Executive</p>
                    </div>
                </div>
  `;

  // let announceHeader = document.createElement('h2');
  // announceHeader.textContent = 'Anouncements';
  // otherCards.appendChild(announceHeader);
  // const announcements = document.createElement('div');
  // announcements.classList.add('announcements');
  // announcements.textContent = "Hold for Announcements";

  // // add dummy announcement content

  // otherCards.appendChild(announcements);

  // let trendingHeader = document.createElement('h2');
  // trendingHeader.textContent = 'Trending';
  // otherCards.appendChild(trendingHeader);
  // const trending = document.createElement('div');
  // trending.classList.add('trending');
  // trending.textContent = "Hold for Trending";

  // // add dummy trending content

  // otherCards.appendChild(trending);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDbFZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRWpCOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2xvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2FyZCgpIHtcblxuICAgIC8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJTYW1wbGUgUHJvamVjdFwiLCBcIlNhbXBsZSBEZXNjcmlwdGlvblwiLCBbbmV3IFRvZG8oXCJvbmVcIiwgXCJoaWdoXCIsIGZhbHNlKSwgbmV3IFRvZG8oXCJ0d29cIiwgXCJoaWdoXCIsIHRydWUpLCBuZXcgVG9kbyhcInRocmVlXCIsIFwiaGlnaFwiLCBmYWxzZSldKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdC5zaG93VG9kb3MoKSk7XG5cbiAgICAvLyBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gICAgZ2VuZXJhdGVOZXdQcm9qZWN0KCk7XG5cbiAgICByZXR1cm4gcmVuZGVyQ2FyZChwcm9qZWN0cyk7XG5cbiAgICB9O1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChwcm9qZWN0cykge1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY2FyZHMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBsZXQgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZCcpO1xuICAgIFxuICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIGNhcmRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0VGl0bGUoZSwgcHJvamVjdHMsIGkpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuXG4gICAgICAgIGxldCBkZWxldGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGVsZXRlQ2FyZC5zcmMgPSAnLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIGRlbGV0ZUNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBkZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGRlbGV0ZVByb2plY3QoZSwgcHJvamVjdHMsIGkpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVDYXJkKTtcbiAgICBcbiAgICAgICAgbGV0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkRGVzYy50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBjYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNhcmREZXNjLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgY2FyZERlc2MuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4gZWRpdERlc2NyaXB0aW9uKGUsIHByb2plY3RzLCBpKSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2MpO1xuICAgIFxuICAgICAgICBsZXQgY2FyZFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdjYXJkLXNldHRpbmdzJyk7XG4gICAgXG4gICAgICAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhZGQuc3JjID0gJy4uL2Fzc2V0cy9zdGFyLXBsdXMtb3V0bGluZS5zdmcnO1xuICAgICAgICBhZGQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICBcbiAgICAgICAgbGV0IHdhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgd2F0Y2guc3JjID0gJy4uL2Fzc2V0cy9leWUtcGx1cy1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIHdhdGNoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgd2F0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlU2FtcGxlUmVxcywgZmFsc2UpO1xuICAgICAgICBjYXJkU2V0dGluZ3MuYXBwZW5kQ2hpbGQod2F0Y2gpO1xuICAgIFxuICAgICAgICBsZXQgZm9yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGZvcmsuc3JjID0gJy4uL2Fzc2V0cy92aWV3LWxpc3Qtb3V0bGluZS5zdmcnO1xuICAgICAgICBmb3JrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXJkLWljb24nKTtcbiAgICAgICAgZm9yay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdHNbaV0pO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRTZXR0aW5ncy5hcHBlbmRDaGlsZChmb3JrKTtcbiAgICBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkU2V0dGluZ3MpO1xuXG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY2FyZHM7XG59O1xuXG5cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCB0b2Rvcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH07XG4gICAgc2hvd1RvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG5cbn07XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9OYW1lLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IHRvZG9OYW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9O1xuICAgIC8vIHVwZGF0ZVRhc2soKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLmNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgIC8vICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgLy8gICAgIH07XG4gICAgLy8gfTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtcycpO1xuICAgIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0b2RvSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudGl0bGU7XG4gICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNsb3NlLnNyYyA9ICcuLi9hc3NldHMvY2xvc2Uuc3ZnJztcbiAgICAgICAgY2xvc2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhcmQtaWNvbicpO1xuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWxvYWRDYXJkcyhwcm9qZWN0cyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGxldCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0Rlc2MudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS5kZXNjcmlwdGlvbjtcbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvLWxpc3QnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE5hbWUudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8tbGlzdC1pdGVtXCIpO1xuXG4gICAgICAgIGxldCB0b2RvQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XG4gICAgICAgIHRvZG9DaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRvZG9DaGVja0JveC5jaGVja2VkID0gcHJvamVjdE5hbWUudG9kb3NbaV0uY29tcGxldGU7XG4gICAgICAgIHRvZG9DaGVja0JveC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb21wbGV0ZVwiKTtcbiAgICAgICAgdG9kb0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0b2dnbGVDaGVja0JveChlLCBwcm9qZWN0TmFtZSwgaSkpO1xuXG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lLnRvZG9zW2ldLnRvZG9OYW1lfWA7XG4gICAgICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZSA9PiBlZGl0VG9kb1RpdGxlKGUsIHByb2plY3ROYW1lLnRvZG9zLCBpKSk7XG5cbiAgICAgICAgbGV0IHN0YXJ0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHN0YXJ0VG9kby5zcmMgPSAnLi4vYXNzZXRzL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG4gICAgICAgIHN0YXJ0VG9kby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG5cbiAgICAgICAgbGV0IGRlbFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBkZWxUb2RvLnNyYyA9ICcuLi9hc3NldHMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJztcbiAgICAgICAgZGVsVG9kby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2FyZC1pY29uJyk7XG4gICAgICAgIGRlbFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gZGVsZXRlVG9kbyhlLCBwcm9qZWN0TmFtZSwgaSkpO1xuXG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9DaGVja0JveCk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHN0YXJ0VG9kbyk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbFRvZG8pO1xuXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZCh0b2RvSXRlbSk7XG4gICAgfTtcbiAgICBcbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCduZXctdG9kbycpO1xuICAgIG5ld1RvZG8udGV4dENvbnRlbnQgPSAoJ0FkZCBOZXcgQWN0aW9uIEl0ZW0nKTtcbiAgICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBhZGRUb2RvKHByb2plY3ROYW1lKSk7XG5cbiAgICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtcyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSwgcHJvamVjdEFycmF5LCBpKSB7XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICByZW5kZXJDYXJkKHByb2plY3RBcnJheSk7XG59O1xuXG5mdW5jdGlvbiBlZGl0VGl0bGUoZSwgcHJvamVjdEFycmF5LCBpKSB7XG4gICAgY29uc3QgbmV3VGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHByb2plY3RBcnJheVtpXS50aXRsZSA9IG5ld1RleHQ7XG59O1xuXG5mdW5jdGlvbiBlZGl0RGVzY3JpcHRpb24oZSwgcHJvamVjdEFycmF5LCBpKSB7XG4gICAgY29uc3QgbmV3VGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHByb2plY3RBcnJheVtpXS5kZXNjcmlwdGlvbiA9IG5ld1RleHQ7XG59O1xuXG5mdW5jdGlvbiBhZGRUb2RvKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFwiZW50ZXIgYWN0aW9uXCIsIFwiaGlnaFwiLCBmYWxzZSk7XG4gICAgcHJvamVjdE5hbWUudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdE5hbWUpO1xufTtcblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhlLCBwcm9qZWN0TmFtZSwgaSkge1xuICAgIGxldCB0b2RvTGlzdCA9IHByb2plY3ROYW1lLnRvZG9zO1xuICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICBkaXNwbGF5VG9kb0xpc3QocHJvamVjdE5hbWUpO1xufTtcblxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2tCb3goZSwgcHJvamVjdE5hbWUsIGkpIHtcbiAgICBsZXQgdG9kb0l0ZW0gPSBwcm9qZWN0TmFtZS50b2Rvc1tpXTtcbiAgICBpZiAodG9kb0l0ZW0uY29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICB0b2RvSXRlbS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9JdGVtLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9O1xuICAgIGRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TmFtZSk7XG59O1xuXG4vLyBPdGhlciBmdW5jdGlvbnNcbmZ1bmN0aW9uIHJlbG9hZENhcmRzKHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0FjdGl2ZSBSZXF1aXNpdGlvbnMnO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY2FyZHMpO1xuXG4gICAgY29uc3Qgb3RoZXJDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG90aGVyQ2FyZHMuY2xhc3NMaXN0LmFkZCgnb3RoZXItcHJvamVjdHMnKTtcblxuICAgIG90aGVyQ2FyZHMuaW5uZXJIVE1MID0gYFxuICAgIDxoMj5UZWFtIEFubm91bmNlbWVudHM8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImFubm91bmNlbWVudHNcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxoMz5Tb3VyY2UtYS10aG9uPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPkF0dGVudGlvbiB0ZWFtOiBXZSBhcmUgZXhjaXRlZCB0byBhbm5vdW5jZSB0aGF0IHRoZSB0ZWFtIHNvdXJjaW5nIHByb2plY3Qgd2lsbCBraWNrIG9mZiBvbiBNb25kYXksIHNvIGdldCByZWFkeSB0byBjb2xsYWJvcmF0ZSBhbmQgc291cmNlIHNvbWUgdG9wIHRhbGVudCE8L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxociBjbGFzcz1cInNvbGlkXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxoMz5XZWxjb21lIEJydWNlIHRvIHRoZSB0ZWFtITwvaDM+XG4gICAgICAgICAgICAgICAgICA8cD5Kb2luIHVzIGluIGdpdmluZyBhIHdhcm0gd2VsY29tZSB0byBCcnVjZSwgd2hvIGpvaW5zIG91ciBwcm9kdWN0IHRlYW0gZnJvbSBHb29nbGUsIGJyaW5naW5nIHZhbHVhYmxlIGV4cGVydGlzZSBhbmQgaW5zaWdodHMgdG8gb3VyIG9yZ2FuaXphdGlvbi48L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxociBjbGFzcz1cInNvbGlkXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxoMz5OZXcgRW1wbG95ZXIgQnJhbmRpbmcgUmVzb3VyY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgPHA+V2UgYXJlIHByb3VkIHRvIHNoYXJlIHRoYXQgb3VyIHJlY2VudCBmZWF0dXJlIG9uIFRlY2hDcnVuY2ggY2FuIG5vdyBiZSB1dGlsaXplZCBhcyBhIHBvd2VyZnVsIGVtcGxveWVyIGJyYW5kaW5nIHJlc291cmNlLCBzaG93Y2FzaW5nIG91ciBjb21wYW55J3MgaW5ub3ZhdGlvbiBhbmQgY3VsdHVyZS48L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyPkxhdGVzdCBIaXJpbmcgQWN0aXZpdHk8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cInRyZW5kaW5nXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvcHJvZmlsZTEuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9maWxlLXBpYy10ZWFtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJzXCI+XG4gICAgICAgICAgICAgIDxoMz5Sb2dlcjwvaDM+XG4gICAgICAgICAgICAgIDxwPlByb2R1Y3QgTWFya2V0aW5nIE1hbmFnZXI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvcHJvZmlsZTIuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9maWxlLXBpYy10ZWFtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJzXCI+XG4gICAgICAgICAgICAgIDxoMz5CcnVjZTwvaDM+XG4gICAgICAgICAgICAgIDxwPlNlbmlvciBQcm9kdWN0IE1hbmFnZXI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvcHJvZmlsZTMuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9maWxlLXBpYy10ZWFtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJzXCI+XG4gICAgICAgICAgICAgIDxoMz5QZXRyYTwvaDM+XG4gICAgICAgICAgICAgIDxwPkRpcmVjdG9yLCBTb2Z0d2FyZSBFbmdpbmVlcmluZzwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9wcm9maWxlNC5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2ZpbGUtcGljLXRlYW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcnNcIj5cbiAgICAgICAgICAgICAgPGgzPkxvZ2FuPC9oMz5cbiAgICAgICAgICAgICAgPHA+QWNjb3VudCBFeGVjdXRpdmU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbmA7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG90aGVyQ2FyZHMpO1xuXG4gICAgcmVuZGVyQ2FyZChwcm9qZWN0TGlzdCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdQcm9qZWN0KCkge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJFbnRlciBSZXF1aXNpdGlvbiBOYW1lXCIsIFwiRW50ZXIgU3VtbWFyeSBKb2IgRGVzY3JpcHRpb25cIiwgW10pO1xuICAgIG5ld1Byb2plY3QudG9kb3MgPSBnZW5lcmF0ZVJlY3J1aXRpbmdUb2RvcygpO1xuXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVjcnVpdGluZ1RvZG9zKCkge1xuICAgIGxldCB0b2RvTGlzdCA9IFtcbiAgICAgICAgbmV3IFRvZG8oXCJSb2xlIEtpY2tvZmZcIiwgXCJoaWdoXCIsIGZhbHNlKSwgXG4gICAgICAgIG5ldyBUb2RvKFwiRGVmaW5lIEludGVydmlldyBTY29yZWNhcmRcIiwgXCJoaWdoXCIsIGZhbHNlKSwgXG4gICAgICAgIG5ldyBUb2RvKFwiUGxhbiBJbnRlcnZpZXdzXCIsIFwiaGlnaFwiLCBmYWxzZSksXG4gICAgICAgIG5ldyBUb2RvKFwiQ3JlYXRlIEludGVydmlldyBQcm9jZXNzXCIsIFwiaGlnaFwiLCBmYWxzZSksIFxuICAgICAgICBuZXcgVG9kbyhcIlNvdXJjZSAmIEludGVydmlldyBDYW5kaWRhdGVzXCIsIFwiaGlnaFwiLCBmYWxzZSksIFxuICAgICAgICBuZXcgVG9kbyhcIkdlbmVyYXRlIE9mZmVyIExldHRlclwiLCBcImhpZ2hcIiwgZmFsc2UpXG4gICAgXTtcbiAgICByZXR1cm4gdG9kb0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlUmVxcygpIHtcbiAgICBsZXQgZ3Jvd3RoID0gbmV3IFByb2plY3QoXCJHcm93dGggSGFja2VyXCIsIFwiSm9pbiBvdXIgZHluYW1pYyBzdGFydHVwIGFuZCByZXZvbHV0aW9uaXplIHVzZXIgYWNxdWlzaXRpb24gYW5kIHJldGVudGlvbiBzdHJhdGVnaWVzIHRocm91Z2ggZGF0YS1kcml2ZW4gZXhwZXJpbWVudGF0aW9uIGFuZCBpbm5vdmF0aXZlIG1hcmtldGluZyBjYW1wYWlnbnMuXCIsIFtdKTtcbiAgICBncm93dGgudG9kb3MgPSBnZW5lcmF0ZVJlY3J1aXRpbmdUb2RvcygpO1xuXG4gICAgbGV0IGZ1bGxzdGFjayA9IG5ldyBQcm9qZWN0KFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIiwgXCJCZSBwYXJ0IG9mIGEgY3V0dGluZy1lZGdlIHN0YXJ0dXAgYW5kIHNoYXBlIHRoZSBmdXR1cmUgb2Ygb3VyIHBsYXRmb3JtIGJ5IGRlc2lnbmluZyBhbmQgaW1wbGVtZW50aW5nIHNjYWxhYmxlIGFuZCByb2J1c3Qgc29mdHdhcmUgc29sdXRpb25zIGFjcm9zcyB0aGUgZW50aXJlIHRlY2hub2xvZ3kgc3RhY2suXCIsIFtdKTtcbiAgICBmdWxsc3RhY2sudG9kb3MgPSBnZW5lcmF0ZVJlY3J1aXRpbmdUb2RvcygpO1xuXG4gICAgbGV0IGN1c3RvbWVyID0gbmV3IFByb2plY3QoXCJDdXN0b21lciBTdWNjZXNzIE1hbmFnZXJcIiwgXCJIZWxwIGRyaXZlIGN1c3RvbWVyIHNhdGlzZmFjdGlvbiBhbmQgcmV0ZW50aW9uIGluIG91ciBmYXN0LWdyb3dpbmcgc3RhcnR1cCBieSBwcm92aWRpbmcgZXhjZXB0aW9uYWwgc3VwcG9ydCwgYnVpbGRpbmcgcmVsYXRpb25zaGlwcywgYW5kIGltcGxlbWVudGluZyBzdWNjZXNzIHN0cmF0ZWdpZXMuXCIsIFtdKTtcbiAgICBjdXN0b21lci50b2RvcyA9IGdlbmVyYXRlUmVjcnVpdGluZ1RvZG9zKCk7XG5cbiAgICBsZXQgcHJvZHVjdCA9IG5ldyBQcm9qZWN0KFwiUHJvZHVjdCBEZXNpZ25lclwiLCBcIkpvaW4gb3VyIHRhbGVudGVkIHRlYW0gb2YgZGVzaWduZXJzIGFuZCBjcmFmdCBpbnR1aXRpdmUgYW5kIHZpc3VhbGx5IHN0dW5uaW5nIHVzZXIgZXhwZXJpZW5jZXMgZm9yIG91ciBpbm5vdmF0aXZlIHByb2R1Y3QsIG1ha2luZyBhIG1lYW5pbmdmdWwgaW1wYWN0IG9uIGhvdyB1c2VycyBpbnRlcmFjdCB3aXRoIG91ciBwbGF0Zm9ybS5cIiwgW10pO1xuICAgIHByb2R1Y3QudG9kb3MgPSBnZW5lcmF0ZVJlY3J1aXRpbmdUb2RvcygpO1xuXG4gICAgbGV0IG9wcyA9IG5ldyBQcm9qZWN0KFwiT3BlcmF0aW9ucyBBc3NvY2lhdGVcIiwgXCJQbGF5IGEgY3J1Y2lhbCByb2xlIGluIHRoZSBkYXktdG8tZGF5IG9wZXJhdGlvbnMgb2Ygb3VyIHN0YXJ0dXAsIGVuc3VyaW5nIHNtb290aCBwcm9jZXNzZXMgYW5kIGVmZmljaWVuY3kgYWNyb3NzIHZhcmlvdXMgZGVwYXJ0bWVudHMsIGFuZCBjb250cmlidXRpbmcgdG8gb3VyIG92ZXJhbGwgc3VjY2VzcyBhbmQgZ3Jvd3RoLlwiLCBbXSk7XG4gICAgb3BzLnRvZG9zID0gZ2VuZXJhdGVSZWNydWl0aW5nVG9kb3MoKTtcblxuICAgIHByb2plY3RzLnB1c2goZ3Jvd3RoKTtcbiAgICBwcm9qZWN0cy5wdXNoKGZ1bGxzdGFjayk7XG4gICAgcHJvamVjdHMucHVzaChjdXN0b21lcik7XG4gICAgcHJvamVjdHMucHVzaChwcm9kdWN0KTtcbiAgICBwcm9qZWN0cy5wdXNoKG9wcyk7XG5cbiAgICByZW5kZXJDYXJkKHByb2plY3RzKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWRkQ2FyZCBmcm9tICcuL2NhcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVUkoKSB7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRTaWRlYmFyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDb250ZW50KCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbiAgfVxuXG5mdW5jdGlvbiBsb2FkU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Mb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtYWluLWxvZ28nKTtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2dvLnNyYyA9ICcuLi9hc3NldHMvc29uYXItbG9nby5zdmcnO1xuICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpY29uJyk7XG4gIGxldCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kLnRleHRDb250ZW50ID0gJ1NvbmFyJztcbiAgbWFpbkxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG1haW5Mb2dvLmFwcGVuZENoaWxkKGJyYW5kKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICBjb25zdCB0b3BNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b3BNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXYnKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAvLyBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkVUksIGZhbHNlKTtcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChob21lKTtcbiAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvZmlsZS50ZXh0Q29udGVudCA9ICdQcm9maWxlJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgY29uc3QgZW5nYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBlbmdhZ2UudGV4dENvbnRlbnQgPSAnRW5nYWdlJztcbiAgdG9wTWVudS5hcHBlbmRDaGlsZChlbmdhZ2UpO1xuICBjb25zdCB0YWxlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhbGVudC50ZXh0Q29udGVudCA9ICdUYWxlbnQnO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKHRhbGVudCk7XG4gIGNvbnN0IGluc2lnaHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBpbnNpZ2h0cy50ZXh0Q29udGVudCA9ICdJbnNpZ2h0cyc7XG4gIHRvcE1lbnUuYXBwZW5kQ2hpbGQoaW5zaWdodHMpO1xuICBjb25zdCBjb21tdW5pdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbW11bml0eS50ZXh0Q29udGVudCA9ICdDb21tdW5pdHknO1xuICB0b3BNZW51LmFwcGVuZENoaWxkKGNvbW11bml0eSk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b3BNZW51KTtcblxuICBjb25zdCBib3R0b21NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBib3R0b21NZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzZXR0aW5ncycpO1xuXG4gIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzZXR0aW5ncy50ZXh0Q29udGVudCA9ICdTZXR0aW5ncyc7XG4gIGJvdHRvbU1lbnUuYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuICBjb25zdCBzdXBwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzdXBwb3J0LnRleHRDb250ZW50ID0gJ1N1cHBvcnQnO1xuICBib3R0b21NZW51LmFwcGVuZENoaWxkKHN1cHBvcnQpO1xuICBjb25zdCBwcml2YWN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcml2YWN5LnRleHRDb250ZW50ID0gJ1ByaXZhY3knO1xuICBib3R0b21NZW51LmFwcGVuZENoaWxkKHByaXZhY3kpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYm90dG9tTWVudSk7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59O1xuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpO1xuXG4gIGxldCBtYWduaWZ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWFnbmlmeS5zcmMgPSAnLi4vYXNzZXRzL21hZ25pZnkuc3ZnJztcbiAgbWFnbmlmeS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9wLWljb24nKTtcbiAgbGV0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc2VhcmNoLWJveCcpO1xuXG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChtYWduaWZ5KTtcbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG5cbiAgY29uc3QgaGVhZGVyVG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJUb29scy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyVG9vbHNcIik7XG5cbiAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld0J0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBuZXdCdG4udGV4dENvbnRlbnQgPVwiTmV3IFJlcVwiO1xuICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZENhcmQsIGZhbHNlKTtcbiAgXG4gIGxldCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2ZpbGVcIik7XG4gIHByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGVcIik7XG5cbiAgbGV0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5vdGlmaWNhdGlvbi5zcmMgPSAnLi4vYXNzZXRzL2JlbGwtcmluZy1vdXRsaW5lLnN2Zyc7XG4gIG5vdGlmaWNhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9wLWljb24nKTtcbiAgbGV0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwcm9maWxlUGljLnNyYyA9ICcuLi9hc3NldHMvcHJvZmlsZVBpYy5qcGVnJztcbiAgcHJvZmlsZVBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvZmlsZS1waWMnKTtcblxuICBwcm9maWxlLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZVBpYyk7XG5cbiAgaGVhZGVyVG9vbHMuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgaGVhZGVyVG9vbHMuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUb29scyk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcblxufTtcblxuZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0FjdGl2ZSBSZXF1aXNpdGlvbnMnO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGNhcmRzKTtcblxuICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG90aGVyQ2FyZHMuY2xhc3NMaXN0LmFkZCgnb3RoZXItcHJvamVjdHMnKTtcblxuICBvdGhlckNhcmRzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGgyPlRlYW0gQW5ub3VuY2VtZW50czwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFubm91bmNlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Tb3VyY2UtYS10aG9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRlbnRpb24gdGVhbTogV2UgYXJlIGV4Y2l0ZWQgdG8gYW5ub3VuY2UgdGhhdCB0aGUgdGVhbSBzb3VyY2luZyBwcm9qZWN0IHdpbGwga2ljayBvZmYgb24gTW9uZGF5LCBzbyBnZXQgcmVhZHkgdG8gY29sbGFib3JhdGUgYW5kIHNvdXJjZSBzb21lIHRvcCB0YWxlbnQhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cInNvbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldlbGNvbWUgQnJ1Y2UgdG8gdGhlIHRlYW0hPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Kb2luIHVzIGluIGdpdmluZyBhIHdhcm0gd2VsY29tZSB0byBCcnVjZSwgd2hvIGpvaW5zIG91ciBwcm9kdWN0IHRlYW0gZnJvbSBHb29nbGUsIGJyaW5naW5nIHZhbHVhYmxlIGV4cGVydGlzZSBhbmQgaW5zaWdodHMgdG8gb3VyIG9yZ2FuaXphdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic29saWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TmV3IEVtcGxveWVyIEJyYW5kaW5nIFJlc291cmNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgcHJvdWQgdG8gc2hhcmUgdGhhdCBvdXIgcmVjZW50IGZlYXR1cmUgb24gVGVjaENydW5jaCBjYW4gbm93IGJlIHV0aWxpemVkIGFzIGEgcG93ZXJmdWwgZW1wbG95ZXIgYnJhbmRpbmcgcmVzb3VyY2UsIHNob3djYXNpbmcgb3VyIGNvbXBhbnkncyBpbm5vdmF0aW9uIGFuZCBjdWx0dXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyPkxhdGVzdCBIaXJpbmcgQWN0aXZpdHk8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9wcm9maWxlMS5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cInByb2ZpbGUtcGljLXRlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Um9nZXI8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJvZHVjdCBNYXJrZXRpbmcgTWFuYWdlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL3Byb2ZpbGUyLmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwicHJvZmlsZS1waWMtdGVhbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CcnVjZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TZW5pb3IgUHJvZHVjdCBNYW5hZ2VyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvcHJvZmlsZTMuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJwcm9maWxlLXBpYy10ZWFtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBldHJhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpcmVjdG9yLCBTb2Z0d2FyZSBFbmdpbmVlcmluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL3Byb2ZpbGU0LmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwicHJvZmlsZS1waWMtdGVhbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Mb2dhbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2NvdW50IEV4ZWN1dGl2ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gIGA7XG5cbiAgLy8gbGV0IGFubm91bmNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgLy8gYW5ub3VuY2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQW5vdW5jZW1lbnRzJztcbiAgLy8gb3RoZXJDYXJkcy5hcHBlbmRDaGlsZChhbm5vdW5jZUhlYWRlcik7XG4gIC8vIGNvbnN0IGFubm91bmNlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gYW5ub3VuY2VtZW50cy5jbGFzc0xpc3QuYWRkKCdhbm5vdW5jZW1lbnRzJyk7XG4gIC8vIGFubm91bmNlbWVudHMudGV4dENvbnRlbnQgPSBcIkhvbGQgZm9yIEFubm91bmNlbWVudHNcIjtcblxuICAvLyAvLyBhZGQgZHVtbXkgYW5ub3VuY2VtZW50IGNvbnRlbnRcblxuICAvLyBvdGhlckNhcmRzLmFwcGVuZENoaWxkKGFubm91bmNlbWVudHMpO1xuXG4gIC8vIGxldCB0cmVuZGluZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIC8vIHRyZW5kaW5nSGVhZGVyLnRleHRDb250ZW50ID0gJ1RyZW5kaW5nJztcbiAgLy8gb3RoZXJDYXJkcy5hcHBlbmRDaGlsZCh0cmVuZGluZ0hlYWRlcik7XG4gIC8vIGNvbnN0IHRyZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIHRyZW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3RyZW5kaW5nJyk7XG4gIC8vIHRyZW5kaW5nLnRleHRDb250ZW50ID0gXCJIb2xkIGZvciBUcmVuZGluZ1wiO1xuXG4gIC8vIC8vIGFkZCBkdW1teSB0cmVuZGluZyBjb250ZW50XG5cbiAgLy8gb3RoZXJDYXJkcy5hcHBlbmRDaGlsZCh0cmVuZGluZyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3RoZXJDYXJkcyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9