import { NextFunction, Request, Response } from "express"
import { busService } from "./bus.service";

const createBus = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await busService.createUserIntoDB(data)
        if (!result) {
            throw new Error("bus Didn't Created");
        }
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Bus Created successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const updateBus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const data = req.body
        
        const result = await busService.updateBusIntoDB( data, id)
        if (!result) {
            throw new Error("Update Unsuccessful");
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Bus Updated successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}
const deleteBus = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await busService.deleteBusFromDB(id)
        if (!result) {
            throw new Error("Delete Unsuccessful");
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Bus Delete successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const getAvailableBus = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await busService.getAvailableBusFromDB()
        if (!result) {
            throw new Error("Didn't Find Any Bus");
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'All Available bus get successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}
export const busController = {
    createBus,
    updateBus,
    deleteBus,
    getAvailableBus
}