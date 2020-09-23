import Card from './card';

class Column {
  constructor(title, column) {
    this.title = title;
    this.column = column;
    this.cards = new Card(this.column);
  }

  makeColumnHeader = async () => {
    let html = '';

    html += `<div class="column__header">`;
    html += `<div class="header__left">`;
    html += `<span class="card__count">${await this.cards.getCardCountByColumn()}</span>`;
    html += `<span class="column_name">${this.title}</span>`;
    html += `</div>`;
    html += `<div class="header__right">`;
    html += `<svg class="plus__button" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg>`;
    html += `<svg class="close__button hide" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>`;
    html += `</div>`;
    html += `</div>`;

    return html;
  }

  makeNoteElement = () => {
    let html = '';

    html += `<div class="note hide">`;
    html += `<div class="note__content">`;
    html += `<textarea name="note" id="note" placeholder="Enter a note"></textarea>`;
    html += `</div>`;
    html += `<div class="note__footer">`;
    html += `<span class="add__button">Add</span>`;
    html += `<span class="cancel__button">Cancel</span>`;
    html += `</div>`;
    html += `</div>`;

    return html;
  }

  makeColumnElement = async () => {
    const columnList = document.querySelector('.column__wrap');
  
    const cardList = await this.cards.makeCardElement();
    let html = '';
    
    html += `<li class="column" data-no=${this.column}>`;
    html += `${await this.makeColumnHeader()}`;
    html += `${this.makeNoteElement()}`;
    html += `${cardList}`;
    html += `</li>`;

    columnList.insertAdjacentHTML('beforeend', html);
  }
}

export default Column;