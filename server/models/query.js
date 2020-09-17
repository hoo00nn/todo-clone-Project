module.exports = {
  insertUser: `insert into user(id, password) values(?, ?)`,
  findUser: `select * from user where id = ?`,
  isCorrectUser: `select * from user where id = ? and password = ?`,
  getBoard: `select * from board`,
  insertBoard: `insert into board (title) values (?)`,
  updateBoard: `update board set title = ? where title = ?`,
  getCard: `select * from card where user_id = ?`,
  insertCard: `insert into card (title, content, user_id, column_no, date) values (?, ?, ?, ?, ?)`,
  updateCard: `update card set title = ?, content = ?, column_no = ?, date = ? where card_no = ?`,
  deleteCard: `delete from card where card_no = ?`,
  getLog: `select * from log`,
  insertLog: `insert into log (user_id, date, state, to, from) values (?, ?, ?, ?, ?)`,
}