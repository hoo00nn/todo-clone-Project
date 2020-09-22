import request from './utils/request-api';
import Column from './component/column';
import '../stylesheets/style.css';
import Auth from './utils/auth';

class Board {
  constructor() {
    this.boardHeader = document.querySelector('.board__header');
    this.logoutButton = document.querySelector('#logout__button');
  }

  logout = async () => {
    const isLogout = await Auth.tryLogout();
  
    if(isLogout.status === 'success') return window.location.href='/';
    return alert(isLogout.message);
  }

  makeSideNavToggle = (e) => {
    const classList = e.target.classList;
    const sideNav = document.querySelector('.header__sidenav');
  
    if (!classList.contains('header__right-menu') && !classList.contains('sidenav__close-btn')) return;
    sideNav.classList.toggle('active');
  }

  printBoard = async () => {
    const response = await request(
      'GET',
      'http://localhost:8081/api/board');

    for (const item of response.boardList) {
      await new Column(item.title, item.column_no)
      .makeColumnElement();
    }
  }

  clickPlusButtonEvent = () => {
    const plusBtn = document.querySelectorAll('.plus__button');
    
    plusBtn.forEach(v => v.addEventListener('click', e => {
      const parentNode = e.target.closest('.column');
      parentNode.querySelector('.note').classList.toggle('hide');
    }));
  }

  keyDownNoteEvent = () => {
    const note = document.querySelectorAll('.note');

    note.forEach(v => v.addEventListener('keyup', (e) => {
      const addButton = e.currentTarget.querySelector('.add__button');
      
      if (e.target.value === '') addButton.classList.remove('keyup');
      else addButton.classList.add('keyup');
    }))
  }

  clickCancelButtonEvent = () => {
    const note = document.querySelectorAll('.note');

    note.forEach(v => {
      const cancelButton = v.querySelector('.cancel__button');
      const textarea = v.querySelector('#note');
      const addButton = v.querySelector('.add__button');

      cancelButton.addEventListener('click', e => {
        textarea.value = '';
        addButton.classList.remove('keyup');
        v.classList.add('hide');
      })
    })
  }

  deleteCardEvent = () => {
    const card = document.querySelectorAll('.card');
    
    card.forEach(v => {
      const cardInfo = JSON.parse(v.dataset.card);
      const closeBtn = v.querySelector('.close__button');

      closeBtn.addEventListener('click', async () => {
        const result = await request('delete', 'http://localhost:8081/api/card', cardInfo);
        if (result.status === 'success') v.remove();
        else alert('삭제에 실패 하였습니다.');
      });
    })
  }

  on = () => {
    this.boardHeader.addEventListener('click', this.makeSideNavToggle);
    this.logoutButton.addEventListener('click', this.logout);
    this.clickPlusButtonEvent();
    this.keyDownNoteEvent();
    this.clickCancelButtonEvent();
    this.deleteCardEvent();
  }

  init = async () => {
    await this.printBoard();
    this.on();
  }
}

const board = new Board();
board.init();
