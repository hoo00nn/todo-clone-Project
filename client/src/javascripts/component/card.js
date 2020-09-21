import request from '../utils/request-api';

class Card {
  constructor(colNumber) {
    this.column = colNumber;
  }

  getCardByColumn = async () => {
    const response = await request(
      'GET',
      'http://localhost:8081/api/card',
      );

    return response;
  }

  makeCardContent = (title, content) => {
    let html = '';

    html += `<div class="card__header">`;
    html += `<svg class="note" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path></svg>`;
    html += `<span class="title">${title}</span>`;
    html += '<svg class="close__button" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>';
    html += `</div>`;
    html += `<div class="card__content">`;
    html += `<span class="content">${content}</span>`;
    html += `</div>`;

    return html;
  }

  makeCardElement = async () => {
    let html = '';
    const cards = await this.getCardByColumn();
    
    cards.cardList
    .filter(v => v.column_no === this.column)
    .forEach(v => html += `<div class="card"> ${this.makeCardContent(v.title, v.content)} </div>`);

    return html;
  }

  getCardCountByColumn = async () => {
    const cards = await this.getCardByColumn();
    const count = cards.cardList.filter(v => v.column_no === this.column).length;

    return count;
  }
}

export default Card;