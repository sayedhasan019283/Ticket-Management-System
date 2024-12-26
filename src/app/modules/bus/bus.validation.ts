import { z } from 'zod';

const BusSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Bus name is required'),
    number: z.string().min(1, 'Bus number is required'),
    route: z.string().min(1, 'Route is required'),
    capacity: z.number().min(1, 'Capacity must be at least 1'),
    schedule: z.array(z.string().transform((str) => new Date(str))).min(1, "Schedule is required"),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

const UpdateBusValidationSchema = BusSchema.deepPartial();

export const busValidation = {
  BusSchema,
  UpdateBusValidationSchema,
};
