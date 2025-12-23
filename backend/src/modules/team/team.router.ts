import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("teamController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const router = Router();

router.get("/teams/:id", authUser, controller.getTeam.bind(controller));
router.post("/teams", authUser, controller.createTeam.bind(controller));
router.put("/teams/:id", authUser, controller.updateTeam.bind(controller));
router.delete("/teams/:id", authUser, controller.deleteTeam.bind(controller));

router.get("/teams/:id/agents", authUser, controller.getTeamAgents.bind(controller));
router.post("/teams/:id/agents", authUser, controller.addAgent.bind(controller));
router.put("/teams/:id/agents", authUser, controller.updateTeamAgent.bind(controller));
router.delete("/teams/:id/agents", authUser, controller.removeAgent.bind(controller));

router.get("/teams/:id/tickets", authUser, controller.getTeamTickets.bind(controller))
export default router;