const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');

mongoose
  .connect('mongodb://localhost:27017/blogger')
  .then(() => {
    console.log('connect to mongoose');
  })
  .catch((err) => {
    console.log(err);
  });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, (err, res) => {
  console.log('Listening...');
});
