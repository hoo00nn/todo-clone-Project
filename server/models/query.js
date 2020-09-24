module.exports = {
  insertUser: `insert into user(id, password) values(?, ?)`,
  findUser: `select id, password from user where id = ?`,
  isCorrectUser: `select id, password from user where id = ? and password = ?`,
  getBoard: `select title, column_no from board order by column_no`,
  getBoardName: `select title, column_no from board where column_no = ?`,
  insertBoard: `insert into board (title) values (?)`,
  updateBoard: `update board set title = ? where column_no = ?`,
  getCard: `select card_no, title, content, user_id, column_no, date, card_order from card where user_id = ? order by column_no, card_order desc`,
  getMaxCountCardByColumn: `select max(card_order) as maxOrder from card where column_no = ? and user_id = ?`,
  insertCard: `insert into card (title, content, user_id, column_no, date, card_order) values (?, ?, ?, ?, now(), ?)`,
  updateCard: `update card set title = ?, content = ?, column_no = ? where card_no = ?`,
  updateCardOrderByColumn: `update card set card_order = card_order-1 where card_order > ? and user_id = ? and column_no = ?`,
  updateCardByDrag: `update card set card_order = ?, column_no = ? where card_no = ?`,
  deleteCard: `delete from card where card_no = ?`,
  getLog: `select log_no, user_id, date_format(date, '%Y-%m-%d %H:%i:%s') as date, state, log_to, log_from, message, title from log where user_id = ?order by date desc limit 15`,
  insertLog: `insert into log (user_id, date, state, log_to, log_from, message, title) values (?, now(), ?, ?, ?, ?, ?)`,
}
