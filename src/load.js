import addCard from './card.js';

export default function loadUI() {

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
  newBtn.addEventListener("click", addCard, false);
  
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