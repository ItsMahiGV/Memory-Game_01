let flippedCards = [];
let matched = 0;

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (card.innerText === "") {
      card.innerText = card.dataset.name;
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(() => {
          if (flippedCards[0].dataset.name === flippedCards[1].dataset.name) {
            matched += 1;
            flippedCards[0].style.backgroundColor = "#b4f8c8";
            flippedCards[1].style.backgroundColor = "#b4f8c8";
          } else {
            flippedCards[0].innerText = "";
            flippedCards[1].innerText = "";
          }
          flippedCards = [];

          if (matched === 3) {
            alert("Yay! You matched all cards 🎉");
          }
        }, 700);
      }
    }
  });
});
