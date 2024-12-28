import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { USER_ROLE } from "../user/user.constant";
import { purchaseController } from "./purchase.controller";
import  express  from "express";
import { purchaseValidation } from "./purchase.validation";


const router = express.Router()


router.post(
    '/tickets/purchase',
    auth(USER_ROLE.user),
    validateRequest(purchaseValidation.PurchaseValidationSchema),
    purchaseController.purchaseTicket
)

export const purchaseRoutes = router;