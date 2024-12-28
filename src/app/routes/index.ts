import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { openRoutes } from '../modules/open/open.route';
import { busRoutes } from '../modules/bus/bus.route';
import { ticketRoutes } from '../modules/ticket/ticket.route';
import { purchaseRoutes } from '../modules/purchase/purchase.route';
const router = Router();

const moduleRoutes = [
 
  {
    path: '/',
    route: openRoutes,
  },
  {
    path: '',
    route: userRoutes,
  },
  {
    path: '',
    route: busRoutes,
  },
  {
    path: '',
    route: ticketRoutes,
  },
  {
    path: '',
    route: purchaseRoutes,
  },
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
