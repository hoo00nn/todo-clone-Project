import request from '../utils/request-api';

class Log {
  constructor() {
    this.menuButton = document.querySelector('.header__right-menu');
    this.logElement = document.querySelector('.log');
  }

  getLogList = async () => {
    const response = await request('GET', `${process.env.API_URL}log`);
    return response;
  }

  makeLogElement = async () => {
    const log = await this.getLogList();
    let html = '';

    log.logList.forEach(v => {
      html += `<li class="log__content">`;
      html += `<span class="log__message">`;
      html += `<span class="log__userid">@${v.user_id} </span>`;
      html += `<span class="log__state">${v.state} </span>`;
      html += `<span class="log__title">${v.title} </span>`;
      if(v.log_from !== null) html += `<span class="log__to">from <strong>${v.log_from}</strong> </span>`;
      if(v.log_to !== null) html += `<span class="log__to">to <strong>${v.log_to}</strong> </span>`;
      html += `</span>`;
      html += `<span class="log__date">${this.getDateDiff(v.date)}</span>`;
      html += `</li>`;
    });
    return html;
  }

  getDateDiff = (date) => {
    const dateObj = new Date();
    const currentDate = `${dateObj.getFullYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
    const diff = (new Date(currentDate).getTime() - new Date(date)) / 1000;

    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 60*60) return `${Math.floor(diff/60)} minutes ago`;
    if (diff < 60*60*60) return `${Math.floor(diff/(60*60))} hours ago`;
    if (diff < 60*60*60*24) return `${Math.floor(diff/(60*60*24))} days ago`;
    if (diff < 60*60*24*30*12) return `${Math.floor(diff/(60*60*24*30))} months ago`;
    if (diff > 60*60*24*30*12) return `${Math.floor(diff/(60*60*24*30*12))} years ago`;
  }

  on = () => {
    this.menuButton.addEventListener('click', async () => {
      this.logElement.innerHTML = await this.makeLogElement();
    })
  }
}

export default Log;