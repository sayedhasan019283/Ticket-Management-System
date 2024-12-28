import  express  from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";


const router = express.Router()

router.post(
    '/auth/register',
    validateRequest(userValidation.UserSchema),
    userController.createUser
)

router.post( 
    '/auth/login',
    validateRequest(userValidation.loginValidationSchema),
    userController.loginUser,
  );

router.post( 
    '/auth/logout',
    userController.logout,
  );






export const userRoutes = router;