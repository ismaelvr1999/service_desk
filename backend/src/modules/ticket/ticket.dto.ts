import { CreateTicket, CreateTicketLog, CreateTicketComment } from "./ticket.schema";
import * as z from "zod";
export type CreateTicketDTO = z.infer<typeof CreateTicket>;
export type CreateTicketLogDTO = z.infer<typeof CreateTicketLog>;
export type CreateTicketCommentDTO = z.infer<typeof CreateTicketComment>;

