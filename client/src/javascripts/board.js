import request from './utils/request-api';
import Column from './component/column';
import '../stylesheets/style.css';
import Auth from './utils/auth';

class Board {
  constructor() {
    this.boardHeader = document.querySelector('.board__header');
    this.logoutButton = document.querySelector('#logout__button');
  }

  on = () => {
    this.boardHeader.addEventListener('click', this.makeSideNavToggle);
    this.logoutButton.addEventListener('click', this.logout);
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

    response.boardList.forEach(async (v) => {
      await new Column(v.title, v.column_no)
      .makeColumnElement();
    });

    // response.boardList.forEach(async (v) => {
    //   const column = await new Column(v.title, v.column_no)
    //   column.makeColumnElement();
    // });
  }

  init = async () => {
    this.on();
    await this.printBoard();
  }
}

const board = new Board();
board.init();
