import { z } from 'zod';

const TicketSchema = z.object({
  body: z.object({
    busId: z.string().min(1, 'Bus ID is required'),
    price: z.number().min(1, 'Ticket price must be greater than 0'),
    time: z.string(),
    availableSeats: z.number().min(1, 'Available seats must be at least 1'),
  }),
});

const UpdateTicketValidationSchema = TicketSchema.deepPartial();

export const ticketValidation = {
  TicketSchema,
  UpdateTicketValidationSchema,
};
