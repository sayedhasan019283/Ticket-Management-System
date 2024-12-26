import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { openRoutes } from '../modules/open/open.route';
const router = Router();

const moduleRoutes = [
 
  {
    path: '/',
    route: openRoutes,
  },
  {
    path: '/api',
    route: userRoutes,
  }
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
