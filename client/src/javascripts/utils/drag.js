import request from './request-api';
import Board from '../board';

class Drag {
  constructor() {
    this.columnWrap = document.querySelector('.column__wrap');
  }

  on = () => {
    this.columnWrap.addEventListener('dragstart', this.dragStartCard);
    this.columnWrap.addEventListener('dragend', this.dragEndCard);
    this.columnWrap.addEventListener('dragover', this.dragOverCard);
    this.columnWrap.addEventListener('drop', this.dragDropCard);
  }

  dragStartCard = (e) => {
    if(!e.target.closest('.card')) return;

    const card = e.target.closest('.card');
    e.dataTransfer.setData('cardInfo', card.dataset.card);
    card.classList.add('dragging');
  }

  dragEndCard = (e) => {
    if(!e.target.closest('.card')) return;

    const card = e.target.closest('.card');
    card.classList.remove('dragging');
  }

  dragOverCard = (e) => {
    if(!e.target.closest('.column')) return;
    
    e.preventDefault();
    const drag = document.querySelector('.dragging');
    const column = e.target.closest('.column');
    const nextCardPosition = this.getDragCardNextElement(column, e.clientY);

    if (nextCardPosition === null) column.appendChild(drag);
    else column.insertBefore(drag, nextCardPosition);
  }

  getDragCardNextElement = (column, posY) => {
    const cards = [...column.querySelectorAll('.card:not(.dragging)')];

    return cards.reduce((closest, child) => {
      const cardPosition = child.getBoundingClientRect();
      const offset = posY - cardPosition.top - cardPosition.height / 2;
      
      if (offset < 0 && offset > closest.offset) return { offset : offset, element : child };
      else return closest;
    }, { offset : Number.NEGATIVE_INFINITY }).element;
  }

  dragDropCard = async (e) => {
    const card = JSON.parse(e.dataTransfer.getData('cardInfo'));
    const column = e.target.closest('.column');
    const cardsAll = [...column.querySelectorAll('.card')]
    const cardOrderList = cardsAll.map(v => JSON.parse(v.dataset.card).card_no).reverse();
    const body = {
      orderList : cardOrderList,
      column : column.dataset.no,
      previousCard : card,
    }
    const response = await request('PUT', '/api/card/drag', body); 

    if (response.status === 'success') new Board().render();
  }
}

new Drag().on();

export default Drag;