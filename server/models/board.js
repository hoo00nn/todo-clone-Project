const { SqlExec } = require('./execute');
const query = require('./query');

const Board = {
  getBoard : async () => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ boardList ] = await conn.query(query.getBoard, []);
        await conn.commit();
        return boardList;
      } catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } finally {
        conn.release();
      }
    })
    return result;
  },

  getBoardName : async (column_no) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ boardName ] = await conn.query(query.getBoardName, [column_no]);
        await conn.commit();
        return boardName;
      } catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } finally {
        conn.release();
      }
    })
    return result;
  },

  insertBoard : async (title) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.insertBoard, [title]);
        await conn.commit();
        return true;
      } catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } finally {
        conn.release();
      }
    })
    return result;
  },

  updateBoard : async (data) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.updateBoard, data);
        await conn.commit();
        return true;
      } catch(err) {
        console.log('Query Error');
        await conn.rollback();
        return false;
      } finally {
        conn.release();
      }
    })
    return result;
  }
}

module.exports = {
  Board
}