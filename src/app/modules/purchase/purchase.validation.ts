import { z } from 'zod';
import mongoose from 'mongoose';

const purchaseValidationSchema = z.object({
  busId: z.string().nonempty("Bus ID is required."),
  ticketId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid Ticket ID format.",
  }),
  timeSlot: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid time slot format. Expected a valid date.",
  }),
});

type PurchaseValidationType = z.infer<typeof purchaseValidationSchema>;

export { purchaseValidationSchema, PurchaseValidationType };
