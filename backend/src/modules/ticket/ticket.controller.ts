import { Request, Response } from "express";
import TicketService from "./ticket.service";
import { CreateTicket } from "./ticket.schema";
import HttpStatus from "@constants/httpStatuses";
import { Ticket } from "./ticket.schema";

export default class TicketController {
    private service: TicketService;
    constructor(ticketService: TicketService) {
        this.service = ticketService;
    }

    async createTicket(req: Request, res: Response) {
        const newTicket = CreateTicket.parse(req.body);
        const ticket = await this.service.createTicket(newTicket);
        res.status(HttpStatus.CREATED).json({ ok: true, ticket });
    }

    async getTicket(req: Request, res: Response) {
        const ticketId = Ticket.shape.id.parse(req.params.id);
        const ticket = await this.service.getTicket(ticketId);
        res.status(HttpStatus.OK).json({ ok: true, ticket });
    }

    async deleteTicket(req: Request, res: Response) {
        const ticketId = Ticket.shape.id.parse(req.params.id);
        await this.service.deleteTicket(ticketId);
        res.status(HttpStatus.OK).json({ ok: true });
    }

    async updateTicketStatus(req: Request, res: Response) {
        const ticketId = Ticket.shape.id.parse(req.params.id);
        const newStatus = Ticket.shape.status.parse(req.body.status);
        await this.service.updateTicketStatus(ticketId, newStatus);
        res.status(HttpStatus.OK).json({ ok: true });
    }
}