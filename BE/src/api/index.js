const Router = require('koa-router');

const posts = require('./posts');

const api = new Router();

api.get('/conn', (ctx) => {
  ctx.body = 'conn 성공';
});

api.use('/posts', posts.routes());
module.exports = api;
