import { Request, Response } from "express";
import TicketService from "./ticket.service";
import { CreateTicket, CreateTicketComment, CreateTicketLog } from "./ticket.schema";
import HttpStatus from "@constants/httpStatuses";
import { Ticket } from "./ticket.schema";
import { AuthRequest } from "@/src/types/auth.type";

export default class TicketController {
    private service: TicketService;
    constructor(ticketService: TicketService) {
        this.service = ticketService;
    }

    async createTicket(req: AuthRequest, res: Response) {
        const newTicket = CreateTicket.parse(req.body);
        const ticket = await this.service.createTicket(newTicket);
        res.status(HttpStatus.CREATED).json({ ok: true, ticket });
    }

    async getTicket(req: AuthRequest, res: Response) {
        const ticketId = Ticket.shape.id.parse(req.params.id);
        const ticket = await this.service.getTicket(ticketId);
        res.status(HttpStatus.OK).json({ ok: true, ticket });
    }

    async deleteTicket(req: AuthRequest, res: Response) {
        const ticketId = Ticket.shape.id.parse(req.params.id);
        await this.service.deleteTicket(ticketId);
        res.status(HttpStatus.OK).json({ ok: true });
    }

    async updateTicketStatus(req: AuthRequest, res: Response) {
        const ticketStatus = CreateTicketLog.parse(req.body);
        await this.service.updateTicketStatus(ticketStatus);
        res.status(HttpStatus.OK).json({ ok: true });
    }

    async createTicketComment(req: AuthRequest, res: Response) {
        const newComment = CreateTicketComment.parse(req.body);
        await this.service.createTicketComment(newComment);
        res.status(HttpStatus.OK).json({ ok: true });
    }
}