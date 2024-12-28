import  express  from "express";
import validateRequest from "../../middlewares/validateRequest";
import { busValidation } from "./bus.validation";
import { busController } from "./bus.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";


const router = express.Router()

router.post(
    '/admin/bus',
    auth( USER_ROLE.admin),
    validateRequest(busValidation.BusSchema),
    busController.createBus
)
router.put(
    '/admin/bus/:id',
    auth( USER_ROLE.admin),
    validateRequest(busValidation.UpdateBusValidationSchema),
    busController.updateBus
)
router.delete(
    '/admin/bus/:id',
    auth( USER_ROLE.admin),
    busController.deleteBus
)
router.get(
    '/buses',
    auth(USER_ROLE.user),
    busController.getAvailableBus
)





export const busRoutes = router;