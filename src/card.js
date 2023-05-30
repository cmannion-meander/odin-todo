export default function addCard() {

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