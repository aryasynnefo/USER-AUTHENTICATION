import { Router } from "express";
import auth from "./middleware/auth.js";
import * as controller from "./controller.js"
const router=Router();

router.route("/add").post(controller.addUser);
router.route("/login").post(controller.login);
router.route("/home").get(auth,controller.home);




export default router;