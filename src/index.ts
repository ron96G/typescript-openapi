import Router from '@koa/router';
import serve from 'koa-static';
import Koa, { Context } from 'koa';
import { RegisterRoutes } from './routes/routes.generated';

const app = new Koa();

const router: Router = new Router();
RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());
app.use(serve('./public'));
app.listen(8080);
