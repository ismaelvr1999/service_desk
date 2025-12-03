import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("teamController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const router = Router();

router.get("/teams/:id", authUser, controller.getTeam.bind(controller));
router.post("/teams/:id/agents", authUser, controller.addAgent.bind(controller));
router.post("/teams", authUser, controller.createTeam.bind(controller));
router.put("/teams/:id", authUser, controller.updateTeam.bind(controller));
router.delete("/teams/:id", authUser, controller.deleteTeam.bind(controller));
export default router;