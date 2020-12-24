const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors'); //允许跨域的插件
const app = new Koa();
const router = new Router();
//跨域
app.use(cors());

router.get('/login', async(ctx) => {
    let query = ctx.query;
    //let query = ctx.request.query;
    console.log(query);
    ctx.body = {
        query
    };
});
//把router 挂载到app
app.use(router.routes())
    .use(router.allowedMethods());

app.listen('9000', () => {
    console.log('9000 port is success');
});
// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const dir = '../next-admin'
// // const dev = process.env.NODE_ENV !== 'production'
// // const app = next({ dev })
// const app = next({ dev,dir,quiet:false })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(9000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:9000')
//   })
// })

