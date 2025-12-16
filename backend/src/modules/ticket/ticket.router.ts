import container from "@container/register";
import { Router } from "express";

const router = Router();
const controller = container.resolve("ticketController");
const auth = container.resolve("authMiddleware");
const authUser = auth.authUser.bind(auth);

router.get("/tickets/:id", authUser, controller.getTicket.bind(controller));
router.post("/tickets", authUser, controller.createTicket.bind(controller));
router.post("/tickets/:id/comments", authUser, controller.createTicketComment.bind(controller));
router.delete("/tickets/:id", authUser, controller.deleteTicket.bind(controller));
router.patch("/tickets/:id/status", authUser, controller.updateTicketStatus.bind(controller));

export default router;