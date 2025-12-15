import { PrismaClient, TicketStatus } from "@generated/prisma/client";
import { CreateTicketDTO } from "./ticket.dto";
import handlerPrismaError from "@/src/utils/handlerPrismaError";


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
    
    async updateTicketStatus(id: string, status: TicketStatus) {
        await this.prisma.ticket.update({ where: { id }, data: { status } })
            .catch(handlerPrismaError)
    }

    async deleteTicket(id:string){
        await this.prisma.ticket.delete({where:{id}}).catch(handlerPrismaError);
    }
}