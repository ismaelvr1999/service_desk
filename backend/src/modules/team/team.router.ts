import { Router } from "express";
import container from "@container/register";

const controller = container.resolve("teamController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const router = Router();
const rbac = container.resolve("rbacMiddleware");
const requireTeamPermission = rbac.requireTeamPermission.bind(rbac);
const requireTeamOwnership= rbac.requireTeamOwnership.bind(rbac);

router.get(
    "/teams/:id", 
    authUser,
    requireTeamPermission("read_team"), 
    controller.getTeam.bind(controller)
);

router.post(
    "/teams", 
    authUser,  
    controller.createTeam.bind(controller)
);

router.put(
    "/teams/:id", 
    authUser,
    requireTeamPermission("update_team"),      
    controller.updateTeam.bind(controller)
);

router.delete(
    "/teams/:id", 
    authUser, 
    requireTeamOwnership,
    controller.deleteTeam.bind(controller)
);

router.get(
    "/teams/:id/agents", 
    authUser, 
    requireTeamPermission("read_team_agents"),
    controller.getTeamAgents.bind(controller)
);

router.post(
    "/teams/:id/agents", 
    authUser, 
    requireTeamPermission("add_team_agent"),
    controller.addAgent.bind(controller)
);

router.put(
    "/teams/:id/agents", 
    authUser, 
    requireTeamPermission("update_team_agent"),
    controller.updateTeamAgent.bind(controller)
);

router.delete(
    "/teams/:id/agents", 
    authUser, 
    requireTeamPermission("remove_team_agent"),
    controller.removeAgent.bind(controller)
);

router.get(
    "/teams/:id/tickets", 
    authUser, 
    requireTeamPermission("read_team_tickets"),
    controller.getTeamTickets.bind(controller)
);
export default router;