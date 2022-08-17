const Router = require('koa-router');
const api = new Router();

api.get('/conn', (ctx) => {
  ctx.body = 'conn 성공';
});

module.exports = api;
