const { SqlExec } = require('./execute');
const query = require('./query');

const Card = {
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
  
  deleteCard : async (card_no, orderUpdateData, logData) => {
    const result = await SqlExec(async (conn) => {
      try {
        await conn.query(query.updateCardOrderByColumn, orderUpdateData);
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
  },

  getMaxCountCardByColumn : async (column_no, user_id) => {
    const result = await SqlExec(async (conn) => {
      try {
        const [ count ] = await conn.query(query.getMaxCountCardByColumn, [column_no, user_id]);
        await conn.commit();
        return count[0].maxOrder;
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

  updateCardByMove : async (updateData, logData) => {
    const result = await SqlExec(async (conn) => {
      try {
        if (updateData === null) await conn.query(query.insertLog, logData);
        else await conn.query(query.updateCardByDrag, updateData);
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
}

module.exports = {
  Card
}
