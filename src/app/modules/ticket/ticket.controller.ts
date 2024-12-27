
import { NextFunction, Request, Response } from "express"
import { ticketService } from "./ticket.service";


const createTicket = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const data = req.body;
        const result = await ticketService.createTicketIntoDB(data);
        if (!result) {
            throw new Error("Ticket not Created");
        }
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'ticket Created successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}
const updateTicket = async(req : Request, res : Response, next : NextFunction) => {
    try {
        const id = req.params.id
        const payload = req.body
        const result = await ticketService.updateTicketIntoDB( payload, id)
        if (!result) {
            throw new Error("Ticket  Updated unsuccessful");
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'ticket Updated successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const deleteTicket = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const id = req.params.id
        const result = await ticketService.deleteTicketFromDB(id);
        if (!result) {
            throw new Error("Ticket Delete Unsuccessful");
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Ticket delete successfully',
            data: result
        });
    } catch (error) {
        next(error)
    }
}
export const ticketController = {
    createTicket,
    updateTicket,
    deleteTicket
}