import { Schema, model } from 'mongoose';
import { TBus } from './bus.interface';

const BusSchema: Schema = new Schema<TBus>(
    {
      name: { type: String, required: true },
      number: { type: String, required: true, unique: true },
      route: { type: String, required: true },
      capacity: { type: Number, required: true },
      schedule: [{ type: Date, required: true }],
    },
    { timestamps: true }
  );
  
  export const BusModel = model<TBus>('Bus', BusSchema);