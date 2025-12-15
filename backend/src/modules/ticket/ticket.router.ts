import container from "@/src/container/register";
import { Router } from "express";

const router = Router();
const controller = container.resolve("ticketController");

router.get("/tickets/:id",controller.getTicket.bind(controller));
router.post("/tickets",controller.createTicket.bind(controller));
router.delete("/tickets/:id",controller.deleteTicket.bind(controller));
router.patch("/tickets/:id/status",controller.updateTicketStatus.bind(controller));

export default router;