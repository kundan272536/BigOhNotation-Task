import { Router } from "express";
import { userDetails, userRegister } from "../controllers/user.controller.js";
const router=Router();
router.route("/").post(userRegister);
router.route("/").get(userDetails);

export default router;