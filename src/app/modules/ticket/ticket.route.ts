import  express  from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ticketValidation } from "./ticket.validation";
import { ticketController } from "./ticket.controller";

const router = express.Router()

router.post(
    '/admin/ticket',
    validateRequest(ticketValidation.TicketSchema),
    ticketController.createTicket
)
router.put(
    '/admin/ticket/:id',
    validateRequest(ticketValidation.UpdateTicketValidationSchema),
    ticketController.updateTicket
)
router.delete(
    '/admin/ticket/:id',
    ticketController.deleteTicket
)

export const ticketRoutes = router;