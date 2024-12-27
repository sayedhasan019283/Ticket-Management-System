import  { Schema, model } from 'mongoose';
import { TPurchase } from './purchase.interface';

const purchaseSchema = new Schema<TPurchase>({
    busId: { type: String, required: true },
    ticketId: { type: Schema.Types.ObjectId, required: true, ref: 'Ticket' },
    timeSlot: { type: Date, required: true },
  });
  
export  const PurchaseModel = model<TPurchase>('Purchase', purchaseSchema);