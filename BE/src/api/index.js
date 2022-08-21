import Router from 'koa-router';
import posts from './posts';
import auth from './auth';

const api = new Router();

api.get('/conn', (ctx) => {
  ctx.body = 'conn 성공';
});

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

export default api;
