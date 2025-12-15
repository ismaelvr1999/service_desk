import { CreateTicket } from "./ticket.schema";
import * as z from "zod";
export type CreateTicketDTO = z.infer<typeof CreateTicket>; 