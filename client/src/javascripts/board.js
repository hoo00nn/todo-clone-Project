import request from './utils/request-api';
import Column from './component/column';
import '../stylesheets/style.css';
import Auth from './utils/auth';
import Modal from './utils/modal';
import Log from './component/log';

class Board {
  constructor() {
    this.boardHeader = document.querySelector('.board__header');
    this.logoutButton = document.querySelector('#logout__button');
    this.columnWrap = document.querySelector('.column__wrap');
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
    const columnWrap = document.querySelector('.column__wrap');
    columnWrap.innerHTML = '';

    const response = await request('GET', '/api/board');

    for (const item of response.boardList) {
      await new Column(item.title, item.column_no)
      .makeColumnElement();
    }
  }

  keyUpNoteEvent = (e) => {
    const note = e.target.closest('.note');
    const addButton = note.querySelector('.add__button');
  
    if (e.target.value === '') addButton.classList.remove('keyup');
    else addButton.classList.add('keyup');
  }

  clickPlusButtonEvent = (e) => {
    const parentNode = e.target.closest('.column');
    parentNode.querySelector('.note').classList.toggle('hide');
  }

  clickCancelButtonEvent = (e) => {
    const note = e.target.closest('.note');
    const textarea = note.querySelector('#note');
    const addButton = note.querySelector('.add__button');

    textarea.value = '';
    addButton.classList.remove('keyup');
    note.classList.add('hide');
  }

  clickCloseButtonEvent = async (e) => {
    const card =e.target.closest('.card');
    const cardInfo = JSON.parse(card.dataset.card);
    const response = await request('delete', '/api/card', cardInfo);

    if (response.status === 'success') await this.init();
    else alert('삭제에 실패 하였습니다.');
  }

  clickAddButtonEvent = async (e) => {
    const note = e.target.closest('.note');
    const content = note.querySelector('#note');
    const column = note.closest('.column').dataset.no;
    const textarea = content.value.split('\n');
    const body = {
      title : textarea[0],
      content : textarea.slice(1).join('\n'),
      column_no : column, 
    }
    const response = await request('POST', '/api/card', body);

    if (response.status === 'success') await this.init();
    else alert('카드 추가에 실패하였습니다.');
  }

  clickSaveButtonEvent = async (e) => {
    const card = e.target.closest('.card');
    const textarea = card.querySelector('#note');

    let body = JSON.parse(card.dataset.card);
    body.title = textarea.value.split('\n')[0];
    body.content = textarea.value.split('\n').slice(1).join('\n');
    const response = await request('put', '/api/card', body);

    if(response.status === 'success') this.init();
    else alert('업데이트에 실패 했습니다.');
  }

  clickColumnWrapEvent = (e) => {
    if (e.target.closest('.plus__button')) return this.clickPlusButtonEvent(e);
    if (e.target.closest('.cancel__button')) return this.clickCancelButtonEvent(e);
    if (e.target.closest('.add__button')) return this.clickAddButtonEvent(e);
    if (e.target.closest('.close__button')) return this.clickCloseButtonEvent(e);
    if (e.target.closest('.save__button')) return this.clickSaveButtonEvent(e);
  }

  keyUpColumnWrapEvent = (e) => {
    if (e.target.closest('.note')) return this.keyUpNoteEvent(e);
  }

  on = () => {
    this.boardHeader.addEventListener('click', this.makeSideNavToggle);
    this.logoutButton.addEventListener('click', this.logout);
    this.columnWrap.addEventListener('click', this.clickColumnWrapEvent);
    this.columnWrap.addEventListener('keyup', this.keyUpColumnWrapEvent);
  }

  init = async () => {
    await this.printBoard();
    this.on();
    new Modal().on();
    new Log().on();
  }
}

const board = new Board();
board.init();