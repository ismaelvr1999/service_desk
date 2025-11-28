import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("authController");
const router = Router();

router.post("/signup", controller.signUp.bind(controller));
router.post("/login", controller.login.bind(controller));
export default router;
