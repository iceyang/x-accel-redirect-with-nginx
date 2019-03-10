const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const router = new Router();
router.get('/api/', ctx => {
  ctx.body = { 'hello': 'world' };
});

router.get('/api/request', ctx => {
  ctx.set({'X-Accel-Redirect': '/internal/request'});
  ctx.status = 200;
});

router.get('/internal/request', ctx => {
  ctx.body = { 'hello': 'im here' };
  ctx.status = 200;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('server listen at 3000');
