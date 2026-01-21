import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("authController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);

const router = Router();

router.post("/signup", controller.signUp.bind(controller));
router.post("/login", controller.login.bind(controller));
router.post("/verify", authUser, controller.verify.bind(controller));

export default router;
