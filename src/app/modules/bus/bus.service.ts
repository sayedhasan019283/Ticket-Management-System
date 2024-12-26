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

export const busService = {
    createUserIntoDB,
    updateBusIntoDB,
    deleteBusFromDB
}