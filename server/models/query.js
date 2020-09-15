module.exports = {
  insertUser: `insert into user(id, password) values(?, ?)`,
  findUser: `select * from user where id = ?`
}