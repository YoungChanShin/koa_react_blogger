const Koa = require('koa');

const app = new Koa();

app.listen(4000, (err, res) => {
  console.log('Listening...');
});
