import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { openRoutes } from '../modules/open/open.route';
import { busRoutes } from '../modules/bus/bus.route';
const router = Router();

const moduleRoutes = [
 
  {
    path: '/',
    route: openRoutes,
  },
  {
    path: '/api',
    route: userRoutes,
  },
  {
    path: '',
    route: busRoutes,
  },
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
