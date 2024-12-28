import { NextFunction, Request, Response } from "express"
import { purchaseService } from "./purchase.service";

const purchaseTicket =async (req : Request, res : Response, next: NextFunction) =>{
    try {
        const payload = req.body;
        const {userId  } = req.user;
        console.log(payload)
        const result = await purchaseService.PurchaseServiceFromDB(payload, userId);
        if (!result) {
            throw new Error("Purchase Failed");
        }
        res.status(201).json({
            statusCode: 201,
            success: true,
            message: "Purchased Ticket successfully",
            data: result
          });
    } catch (error) {
        next(error)
    }
}

export const purchaseController = {
    purchaseTicket
}