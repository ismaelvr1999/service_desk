import { TicketStatus } from "@/generated/prisma/enums";
import * as z from "zod";

export const Ticket = z.object({
    id: z.uuid(),
    subject: z.string(),
    requesterId: z.uuid(),
    agentId: z.uuid().nullable(),
    teamId: z.uuid(),
    description: z.string(),
    status: z.enum(TicketStatus),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const CreateTicket = z.object({
    subject: Ticket.shape.subject,
    requesterId: Ticket.shape.requesterId,
    agentId: Ticket.shape.agentId,
    teamId: Ticket.shape.teamId,
    description: Ticket.shape.description,
    status: Ticket.shape.status
});
