import Router from 'koa-router';
import * as postsCrtl from './posts.crtl';
const posts = new Router();

posts.get('/', postsCrtl.list);
posts.post('/', postsCrtl.write);
posts.get('/:id', postsCrtl.read);
posts.delete('/:id', postsCrtl.remove);
posts.put('/:id', postsCrtl.replace);
posts.patch('/:id', postsCrtl.update);

export default posts;
