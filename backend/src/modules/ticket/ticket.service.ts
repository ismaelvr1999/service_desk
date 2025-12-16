import { PrismaClient } from "@generated/prisma/client";
import { CreateTicketCommentDTO, CreateTicketDTO, CreateTicketLogDTO } from "./ticket.dto";
import handlerPrismaError from "@utils/handlerPrismaError";

export default class TicketService {
    constructor(private prisma: PrismaClient) { }

    async createTicket(ticket: CreateTicketDTO) {
        return this.prisma.ticket.create({
            data: ticket
        });
    }

    async getTicket(id: string) {
        return this.prisma.ticket.findUnique({ where: { id } });
    }

    async updateTicketStatus(data: CreateTicketLogDTO) {
        await this.createTicketLog(data);
        await this.prisma.ticket
            .update({ where: { id: data.ticketId }, data: { status: data.newStatus } })
            .catch(handlerPrismaError);
    }

    async deleteTicket(id: string) {
        await this.prisma.ticket
        .delete({ where: { id } })
        .catch(handlerPrismaError);
    }

    async createTicketLog(data: CreateTicketLogDTO) {
        await this.prisma.ticketLog
        .create({ data })
        .catch(handlerPrismaError);
    }

    async createTicketComment(data: CreateTicketCommentDTO){
        await this.prisma.ticketComment
        .create({data})
        .catch(handlerPrismaError);
    }
}