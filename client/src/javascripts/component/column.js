import Card from './card';

class Column {
  constructor(title, column) {
    this.title = title;
    this.column = column;
    this.cards = new Card(this.column);
  }

  makeColumnHeader = async () => {
    const cardCount = await this.cards.getCardCountByColumn();
    let html = '';

    html += `<div class="column__header">`;
    html += `<div class="header__left">`;
    html += `<span class="card__count">${cardCount}</span>`;
    html += `<div class="column_name modal__open">${this.title}`;
    html += this.makeColumnModal();
    html += `</div>`;
    html += `</div>`;
    html += `<div class="header__right">`;
    html += `<svg class="plus__button" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg>`;
    html += `<svg class="close__button" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>`;
    html += `</div>`;
    html += `</div>`;

    return html;
  }

  makeColumnModal = () => {
    let html = '';

    html += `<div class="modal hidden">`;
    html += `<div class="modal__overlay"></div>`;
    html += `<div class="modal__content">`;
    html += `<div class="header">`;
    html += `<span>Edit ${this.title}</span>`;
    html += `<svg class="modal__close__button" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>`;
    html += `</div>`;
    html += `<div class="content">`;
    html += `<span>Column Name</span>`;
    html += `<input type='text' class="column__box" name="column__box" value="${this.title}">`;
    html += `<span class="update__button keyup">Update Column</span>`;
    html += `</div>`;
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
    const cardList = await this.cards.makeCardElement();
    const columnHeader = await this.makeColumnHeader();
    const noteElement = this.makeNoteElement();
    let html = '';
    
    html += `<li class="column" data-no=${this.column}>`;
    html += `${columnHeader}`;
    html += `${noteElement}`;
    html += `${cardList}`;
    html += `</li>`;

    return html;
  }
}

export default Column;