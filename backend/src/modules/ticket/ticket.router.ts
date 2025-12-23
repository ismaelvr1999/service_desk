import container from "@container/register";
import { Router } from "express";
import roles from "@constants/roles";
const router = Router();
const controller = container.resolve("ticketController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const rbac = container.resolve("rbacMiddleware");
const requireTeamRole = rbac.requireTeamRole.bind(rbac);

router.get(
    "/tickets/:id", 
    authUser, 
    controller.getTicket.bind(controller)
);

router.get(
    "/tickets/:id/logs", 
    authUser, 
    controller.getTicketLogs.bind(controller)
);

router.get(
    "/tickets/:id/comments",
    authUser,
    controller.getTicketComments.bind(controller)
);

router.post(
    "/tickets",
    authUser,
    requireTeamRole([roles.REQUESTER,roles.AGENT,roles.ADMIN], "body", "teamId"),
    controller.createTicket.bind(controller)
);

router.post(
    "/tickets/:id/comments", 
    authUser, 
    controller.createTicketComment.bind(controller)
);

router.delete(
    "/tickets/:id", 
    authUser, 
    controller.deleteTicket.bind(controller)
);

router.patch(
    "/tickets/:id/agent", 
    authUser, 
    controller.updateTicketAgent.bind(controller)
);

router.patch(
    "/tickets/:id/status", 
    authUser, 
    controller.updateTicketStatus.bind(controller)
);

export default router;