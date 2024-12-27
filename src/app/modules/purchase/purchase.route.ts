import validateRequest from "../../middlewares/validateRequest";
import { purchaseController } from "./purchase.controller";
import { purchaseValidationSchema } from "./purchase.validation";
import  express  from "express";


const router = express.Router()


router.post(
    '/tickets/purchase',
    validateRequest(purchaseValidationSchema),
    purchaseController.purchaseTicket
)

export const purchaseRoutes = router;