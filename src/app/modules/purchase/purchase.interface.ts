
import {  Types } from 'mongoose';

 export type TPurchase = {
    busId : Types.ObjectId;
    ticketId : Types.ObjectId;
    timeSlot: Date;
    userId ?: Types.ObjectId;
}