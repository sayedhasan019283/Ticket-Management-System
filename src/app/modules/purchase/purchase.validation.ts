import { z } from 'zod';


const PurchaseValidationSchema = z.object({
  body: z.object({
    busId: z.string().min(1, 'Bus ID is required'),
    ticketId: z.string().min(1, 'Ticket ID is required'),
    timeSlot: z.string().datetime({ offset: true }), // Ensures ISO 8601 format
    userId: z.string().optional(),
  }),
});

const UpdatePurchaseValidationSchema = PurchaseValidationSchema.deepPartial();

export const purchaseValidation = {
  PurchaseValidationSchema,
  UpdatePurchaseValidationSchema,
};