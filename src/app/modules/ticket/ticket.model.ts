import { Schema, model } from 'mongoose';
import { TTicket } from './ticket.interface';

const TicketSchema: Schema = new Schema<TTicket>(
  {
    busId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Bus', 
      required: true 
    },
    price: { 
      type: Number, 
      required: true 
    },
    time: { 
      type: Date, 
      required: true 
    },
    availableSeats: { 
      type: Number, 
      required: true 
    },
    bookedSeats: { 
      type: Number, 
      default: 0 
    },
  },
  { timestamps: true }
);

export const TicketModel = model<TTicket>('Ticket', TicketSchema);