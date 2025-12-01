import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("teamController");
const router = Router();

router.get("/teams/:id", controller.getTeam.bind(controller));
router.post("/teams", controller.createTeam.bind(controller));
router.put("/teams/:id", controller.updateTeam.bind(controller));
router.delete("/teams/:id", controller.deleteTeam.bind(controller));

export default router;