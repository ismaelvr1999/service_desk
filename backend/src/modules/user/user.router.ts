import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("userController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const router = Router();

router.get("/users/profile",authUser,controller.getUserProfile.bind(controller));
router.get("/users/:id/teams",authUser,controller.getUserTeams.bind(controller));

export default router;