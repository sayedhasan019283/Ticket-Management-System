import  express  from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ticketValidation } from "./ticket.validation";
import { ticketController } from "./ticket.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router()

router.post(
    '/admin/ticket',
    auth( USER_ROLE.admin),
    validateRequest(ticketValidation.TicketSchema),
    ticketController.createTicket
)
router.put(
    '/admin/ticket/:id',
    auth( USER_ROLE.admin),
    validateRequest(ticketValidation.UpdateTicketValidationSchema),
    ticketController.updateTicket
)
router.delete(
    '/admin/ticket/:id',
    auth( USER_ROLE.admin),
    ticketController.deleteTicket
)
router.get(
    '/tickets',
    auth(USER_ROLE.user),
    ticketController.getAvailableTicket
)

export const ticketRoutes = router;