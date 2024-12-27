import {  Types } from 'mongoose';

export type TTicket = {
    busId: Types.ObjectId; 
    price: number;
    time: Date;
    availableSeats: number;
    bookedSeats: number;
  };