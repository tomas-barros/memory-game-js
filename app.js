document.addEventListener('DOMContentLoaded', () => {
    console.log('APP STARTED.');

    // card options
    const cardArray = [
        {
            name: 'coffe',
            img: 'imgs/coffe-card.jpg'
        },
        {
            name: 'donut',
            img: 'imgs/donut-card.jpg'
        },
        {
            name: 'fries',
            img: 'imgs/fries-card.jpg'
        },
        {
            name: 'hamburger',
            img: 'imgs/hamburger-card.jpg'
        },
        {
            name: 'coffe',
            img: 'imgs/coffe-card.jpg'
        },
        {
            name: 'donut',
            img: 'imgs/donut-card.jpg'
        },
        {
            name: 'fries',
            img: 'imgs/fries-card.jpg'
        },
        {
            name: 'hamburger',
            img: 'imgs/hamburger-card.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var totalWins = 0;

    const grid = document.querySelector('.grid');
    const resultElement = document.querySelector('#result');

    // create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            
            // valores de 'card'
            card.setAttribute('src', 'imgs/blank.jpg'); // - cambiar por un 'blank' .jpg
            card.setAttribute('data-id', i);
            // card.classList.add('card');
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img');

        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            alert('You found a match!');
            cardsWon.push(cardsChosen);

            totalWins++;
            resultElement.innerHTML = totalWins;
        }

        cards[optionOneId].setAttribute('src', 'imgs/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'imgs/blank.jpg');

        cardsChosen = [];
        cardsChosenId = [];
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});