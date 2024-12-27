import { TTicket } from './ticket.interface';
import { TicketModel } from './ticket.model';

const createTicketIntoDB = async (payload: TTicket) => {
  try {
    const result = await TicketModel.create(payload);
    if (!result) {
      throw new Error('Ticket Create Unsuccessful');
    }
    return result;
  } catch (error) {
    return error;
  }
};
const updateTicketIntoDB = async (payload: Partial<TTicket>, id: string) => {
  try {
    const result = await TicketModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    if (!result) {
        throw new Error("Ticket Didn't Updated");
    }
    return result
  } catch (error) {
    return error;
  }
};

const deleteTicketFromDB = async (id: string) => {
    try {
        const result = await TicketModel.findByIdAndDelete(id)
        if (!result) {
         throw new Error("Ticket Didn't deleted");
        }
        return result
    } catch (error) {
        return error
    }
}

const getAvailableTicketFromDB = async() => {
    try {
        const now = new Date();
        const result = await TicketModel.find({ schedule: { $gte: now } });
        if (!result) {
            throw new Error("Didn't Find Any Ticket");
        }
        return result
    } catch (error) {
        return error
    }
} 



export const ticketService = {
  createTicketIntoDB,
  updateTicketIntoDB,
  deleteTicketFromDB,
  getAvailableTicketFromDB
};
