import Router from 'koa-router';
import posts from './posts';

const api = new Router();

api.get('/conn', (ctx) => {
  ctx.body = 'conn 성공';
});

api.use('/posts', posts.routes());
export default api;
