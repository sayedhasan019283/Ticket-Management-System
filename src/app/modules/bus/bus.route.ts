import  express  from "express";
import validateRequest from "../../middlewares/validateRequest";
import { busValidation } from "./bus.validation";
import { busController } from "./bus.controller";


const router = express.Router()

router.post(
    '/admin/bus',
    validateRequest(busValidation.BusSchema),
    busController.createBus
)
router.put(
    '/admin/bus/:id',
    validateRequest(busValidation.UpdateBusValidationSchema),
    busController.updateBus
)
router.delete(
    '/admin/bus/:id',
    busController.deleteBus
)





export const busRoutes = router;