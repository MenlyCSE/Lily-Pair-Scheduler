function showTutorCard(name, type, availability, timezone) {
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
                <input type="submit" value="Pair" class="btn btn--primary" />
              </div>
          </div>`;
}

function showStudentCard(name, type, availability, timezone) {
    return `
          <div class="card card--secondary">
              <header class="card__header">
                <h3>${name}</h3>
              </header>
              <div class="card__body">
                <div class="list list--primary">
                  <li class="list__item">A ${type} ready to help</li>
                  <li class="list__item">${availability}</li>
                  <li class="list__item">${timezone}</li>
                </div>
                <input type="submit" value="Pair" class="btn btn--secondary" />
              </div>
          </div>`;
}

export { showTutorCard, showStudentCard };