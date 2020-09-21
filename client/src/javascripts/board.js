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

    // response.boardList.forEach(async (v) => {
    //   await new Column(v.title, v.column_no)
    //   .makeColumnElement();
    // });

    for (const item of response.boardList) {
      await new Column(item.title, item.column_no)
      .makeColumnElement();
    }

    // response.boardList.forEach(async (v) => {
    //   const column = await new Column(v.title, v.column_no)
    //   column.makeColumnElement();
    // });
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
      console.log(e.target.value);
      if (e.target.value === '') addButton.classList.remove('keyup');
      else addButton.classList.add('keyup');
    }))
  }

  on = () => {
    this.boardHeader.addEventListener('click', this.makeSideNavToggle);
    this.logoutButton.addEventListener('click', this.logout);
    this.clickPlusButtonEvent();
    this.keyDownNoteEvent();
  }

  init = async () => {
    await this.printBoard();
    this.on();
  }
}

const board = new Board();
board.init();
