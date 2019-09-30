const DB = require('../utils/db.js');
module.exports = {

  garbage: async ctx => {
    const garbageName = ctx.params.garbage;
    ctx.state.data = (await DB.query("SELECT * FROM garbage where garbage_id = ?", [garbageName]));
  }
}