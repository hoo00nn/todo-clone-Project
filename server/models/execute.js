const { pool } = require('../database/db_connection');

const SqlExec = async (query, data) => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const [ result ] = await connection.query(query, data);
      connection.release();
      return result;
    } catch(err) {
      console.log('Query Error');
      connection.release();
      return false;
    }
  } catch(err) {
      console.log('DB Error');
    return false;
  }
};

module.exports = {
  SqlExec
}