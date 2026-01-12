import container from "@container/register";
import { Router } from "express";
const router = Router();
const controller = container.resolve("ticketController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);
const rbac = container.resolve("rbacMiddleware");
const requireTeamPermission = rbac.requireTeamPermission.bind(rbac);
const requireTeamTicketPermission = rbac.requireTeamTicketPermission.bind(rbac);

router.get(
    "/tickets/:id",
    authUser,
    requireTeamTicketPermission("read_ticket"),
    controller.getTicket.bind(controller)
);

router.get(
    "/tickets/:id/logs",
    authUser,
    requireTeamTicketPermission("read_ticket_logs"),
    controller.getTicketLogs.bind(controller)
);

router.get(
    "/tickets/:id/comments",
    authUser,
    requireTeamTicketPermission("read_ticket_comments"),
    controller.getTicketComments.bind(controller)
);

router.post(
    "/tickets",
    authUser,
    requireTeamPermission("create_ticket", "body", "teamId"),
    controller.createTicket.bind(controller)
);

router.post(
    "/tickets/:id/comments",
    authUser,
    requireTeamTicketPermission("create_ticket_comment"),
    controller.createTicketComment.bind(controller)
);

router.delete(
    "/tickets/:id",
    authUser,
    requireTeamTicketPermission("delete_ticket"),    
    controller.deleteTicket.bind(controller)
);

router.patch(
    "/tickets/:id/agent",
    authUser,
    requireTeamTicketPermission("update_ticket_agent"),    
    controller.updateTicketAgent.bind(controller)
);

router.patch(
    "/tickets/:id/status",
    authUser,
    requireTeamTicketPermission("update_ticket_status"),    
    controller.updateTicketStatus.bind(controller)
);

export default router;