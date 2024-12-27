import mongoose from "mongoose";
import { TPurchase } from "./purchase.interface"
import { PurchaseModel } from "./purchase.model"
import { purchaseValidationSchema } from "./purchase.validation";

const PurchaseServiceFromDB = async (payload: TPurchase, userId: string) => {
    try {
      // Validate the payload using the Zod schema
      const validatedPayload = purchaseValidationSchema.parse(payload);
  
      // Add the `userId` to the payload if it is required in the schema/model
      const newPurchaseData = {
        ...validatedPayload,
        userId: new mongoose.Types.ObjectId(userId),
      };
  
      // Create the purchase in the database
      const result = await PurchaseModel.create(newPurchaseData);
      return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Return or throw the error with additional context
      return { error: error.message || "An error occurred while creating the purchase" };
    }
  };


export const purchaseService = {
    PurchaseServiceFromDB
}