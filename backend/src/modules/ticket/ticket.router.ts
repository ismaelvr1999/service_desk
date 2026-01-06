import container from "@container/register";
import { Router } from "express";
const router = Router();
const controller = container.resolve("ticketController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const rbac = container.resolve("rbacMiddleware");
const requireTeamPermission = rbac.requireTeamPermission.bind(rbac);
router.get(
    "/tickets/:id", 
    authUser,
    requireTeamPermission("read_ticket","body","teamId"),
    controller.getTicket.bind(controller)
);

router.get(
    "/tickets/:id/logs", 
    authUser,
    requireTeamPermission("read_ticket_logs","body","teamId"),
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
    requireTeamPermission("create_ticket","body","teamId"),
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