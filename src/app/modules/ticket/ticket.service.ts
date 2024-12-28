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

const getAvailableTicketFromDB = async (id: string | undefined) => {
  try {
      const now = new Date();

      // Build the query object
      const query: Record<string, unknown> = {};

      // If `id` is provided, search by `_id`. Otherwise, search by `schedule`
      if (id) {
          query._id = id ;
      } else {
          query.time = { $gte: now };
      }

      const result = await TicketModel.find(query);

      if (!result || result.length === 0) {
          throw new Error("Didn't Find Any Ticket");
      }

      return result;
  } catch (error) {
      console.error("Error fetching available tickets:", error);
      throw error; // Re-throw the error to be handled by the caller
  }
};




export const ticketService = {
  createTicketIntoDB,
  updateTicketIntoDB,
  deleteTicketFromDB,
  getAvailableTicketFromDB
};
