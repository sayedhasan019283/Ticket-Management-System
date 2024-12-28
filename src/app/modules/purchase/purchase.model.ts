import  { Schema, model } from 'mongoose';
import { TPurchase } from './purchase.interface';

const purchaseSchema = new Schema<TPurchase>({
  busId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Bus', 
    required: true 
  },
    ticketId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Ticket',
      required: true, 
       
    },
    timeSlot: { 
      type: Date,
      required: true 
    },
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User',
    },
  });
  
export  const PurchaseModel = model<TPurchase>('Purchase', purchaseSchema);