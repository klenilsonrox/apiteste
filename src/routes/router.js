import { Router } from "express";
import User from "../models/User.js";
import UserController from "../controllers/UserController.js";



const router = Router()

router.get("/users", UserController.getAllUsers)
router.get('/users/:id', UserController.findUserById)
router.post('/users', UserController.createUser)
router.delete('/users/:id', UserController.deletarUserById)

// token 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


export default router