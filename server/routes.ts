import * as express from 'express';

import ItemCtrl from './controllers/item';
import UserCtrl from './controllers/user';
import Item from './models/item';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const itemCtrl = new ItemCtrl();
  const userCtrl = new UserCtrl();

  // item
  router.route('/items').get(itemCtrl.getAll); 
  router.route('/item').post(itemCtrl.insert);
  router.route('/item/:id').get(itemCtrl.get);
  router.route('/item/:id').put(itemCtrl.update);
 
  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
