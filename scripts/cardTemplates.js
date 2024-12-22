const cardContainer = document.getElementById('card-container');

function showTutorCard(name, email, type, availability, timezone) {
  return `
      <div class="card card--primary">
          <header class="card__header">
            <h3>${name}</h3>
          </header>
          <div class="card__body">
            <div class="list list--primary">
              <li class="list__item">A ${type} ready to help</li>
              <li class="list__item">${availability}</li>
              <li class="list__item">${timezone}</li>
            </div>
            <input 
              type="submit" 
              value="Pair" 
              class="btn btn--primary" 
              onclick="location.href='mailto:${email}';"
            />
          </div>
      </div>`;
}

function showStudentCard(name, email, type, availability, timezone) {
  return `
      <div class="card card--secondary">
          <header class="card__header">
            <h3>${name}</h3>
          </header>
          <div class="card__body">
            <div class="list list--primary">
              <li class="list__item">A ${type} looking for help</li>
              <li class="list__item">${availability}</li>
              <li class="list__item">${timezone}</li>
            </div>
            <input 
              type="submit" 
              value="Pair" 
              class="btn btn--secondary" 
              onclick="location.href='mailto:${email}';"
            />
          </div>
      </div>`;
}

function showFillCards() {
  return `
      <div class="card card--primary card-fill">
        <header class="card__header">
          <h3>No matches</h3>
        </header>
        <div class="card__body"></div>
      </div>`;
}

function showLoadingCards() {
  let amount = 9;
  let cardHtml = '';
  for (let i = 0; i < amount; i++) {
    cardHtml += `
      <div class="card card--primary card-loading">
        <header class="card__header"></header>
        <div class="card__body"></div>
      </div>`;
  }

  cardContainer.innerHTML = cardHtml;
}

export { showTutorCard, showStudentCard, showLoadingCards, showFillCards };