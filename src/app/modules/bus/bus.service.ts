import { TBus } from "./bus.interface"
import { BusModel } from "./bus.model"


const createUserIntoDB = async (payload : TBus) => {
    try {
        const result = await BusModel.create(payload);
        if (!result) {
            throw new Error("Bus Create Unsuccessful 'Error'");
        }
        return result
    } catch (error) {
        return error
    }
}

const updateBusIntoDB = async (payload : Partial<TBus>, id : string) => {
    try {
        const result = await BusModel.findByIdAndUpdate( id, payload, { new: true })
        if (!result) {
            throw new Error("THis Bus Didn't Updated");
        }
        return result
    } catch (error) {
        return error
    }
}

const deleteBusFromDB = async(id : string) => {
    try {
        const result = await BusModel.findByIdAndDelete(id)
        if (!result) {
            throw new Error("Bus Didn't Deleted");
        }
        return result
    } catch (error) {
        return error
    }
}

const getAvailableBusFromDB = async (busName?: string) => {
    try {
        const now = new Date();

        // Build the query object
        const query: Record<string, unknown> = { schedule: { $gte: now } };

        // Add the bus name condition if it's provided
        if (busName) {
            query.name = busName;
        }

        console.log("Query:", query);

        const result = await BusModel.find(query);

        if (!result || result.length === 0) {
            throw new Error("Didn't Find Any Bus");
        }

        return result;
    } catch (error) {
        console.error("Error fetching available buses:", error);
        throw error; // Re-throw error to be handled by the caller
    }
};


export const busService = {
    createUserIntoDB,
    updateBusIntoDB,
    deleteBusFromDB,
    getAvailableBusFromDB
}