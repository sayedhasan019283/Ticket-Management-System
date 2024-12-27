
import {  Types } from 'mongoose';

 export type TPurchase = {
    busId : string;
    ticketId : Types.ObjectId;
    timeSlot: Date;
}