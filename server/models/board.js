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

  updateBoard : async (newTitle, title) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.updateBoard, [newTitle, title]);
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

  getCardByID : async (id) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ cardList ] = await conn.query(query.getCard, [id]);
        await conn.commit();
        return cardList;
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

  insertCard : async (cardData, logData) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.insertCard, cardData);
        await conn.query(query.insertLog, logData);
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

  updateCard : async (cardData, logData) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.updateCard, cardData);
        await conn.query(query.insertLog, logData);
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

  deleteCard : async (card_no, logData) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ card ] = await conn.query(query.deleteCard, [card_no]);
        const [ log ] = await conn.query(query.insertLog, logData);
        if (card.affectedRows === 0) throw Error();
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