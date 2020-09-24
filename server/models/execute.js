const { pool } = require('../database/db_connection');

const SqlExec = async (callback) => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    await connection.beginTransaction();
    return callback(connection);
  } catch(err) {
    console.log('DB Error');
    return false;
  }
};

module.exports = {
  SqlExec
}