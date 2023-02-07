// set card height equal
function setCardHeight() {
  const rs = document.querySelectorAll('.row-section');
  rs.forEach((r) => {
    const cards = r.querySelectorAll('.collapse .card');
    const cardHeight = Math.max(...Array.from(cards).map((c) => c.clientHeight));
    console.log(cardHeight);
    cards.forEach((c) => {
      c.style.height = `${cardHeight}px`;
      c.style.maxHeight = '500px';
    });
  });
}
export { setCardHeight };
