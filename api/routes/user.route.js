import express from "express";
import { deleteUser, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/varifyUser.js";
import {  signout } from "../controllers/auth.controller.js";


const router =express.Router();

router.get('/test' , test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken , deleteUser);
router.post('/signout' , signout);

export default router;