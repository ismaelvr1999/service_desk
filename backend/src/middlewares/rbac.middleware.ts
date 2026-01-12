import { AuthRequest } from "@/src/types/auth.type";
import { NextFunction, Request } from "express";
import { uuid } from "zod";
import UserService from "@module/user/user.service";
import ApiError from "@utils/apiError";
import HttpStatus from "@constants/httpStatuses";
import TicketService from "@module/ticket/ticket.service";
import TeamService from "@module/team/team.service";
//Role-based access control
export default class RBAC {
    constructor(
        private userService: UserService,
        private ticketService: TicketService,
        private teamService: TeamService,
    ) { }

    requireTeamRole(
        allowedRoles: string[],
        teamIdSource: "body" | "params" = "params",
        teamIdField: string = "id"
    ) {
        return async (req: AuthRequest, res: Request, next: NextFunction) => {
            const { id: userId } = req.user;
            const teamId = uuid().parse(req[teamIdSource][teamIdField]);
            const userRole = await this.userService.getUserTeamRole(userId, teamId);

            if (userRole === null) {
                throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have any role in the team");
            }

            if (!allowedRoles.includes(userRole.roleName)) {
                throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have the required role ");
            }
            next();
        }
    }
    requireTeamPermission(
        requiredPermission: string,
        teamIdSource: "body" | "params" = "params",
        teamIdField: string = "id"
    ) {
        return async (req: AuthRequest, res: Request, next: NextFunction) => {
            const { id: userId } = req.user;
            const teamId = uuid().parse(req[teamIdSource][teamIdField]);
            const permissions = await this.userService.getUserTeamPermissions(userId, teamId);

            if (permissions === null) {
                throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have any permissions in the team");
            }
            if (!permissions.includes(requiredPermission)) {
                throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have the required permission");
            }
            next();
        }
    }

    requireTeamTicketPermission(
        requiredPermission: string,
        ticketIdSource: "body" | "params" = "params",
        ticketIdField: string = "id"
    ) {
        return async (req: AuthRequest, res: Request, next: NextFunction) => {
            const { id: userId } = req.user;
            const ticketId = uuid().parse(req[ticketIdSource][ticketIdField]);
            const ticket = await this.ticketService.getTicket(ticketId);
            if (ticket === null) {
                throw new ApiError(HttpStatus.FORBIDDEN, "Ticket not found");

            }
            const permissions = await this.userService.getUserTeamPermissions(userId, ticket.teamId);
            if (permissions === null) {
                throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have any permissions in the team");
            }
            if (!permissions.includes(requiredPermission)) {
                throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have the required permission");
            }
            next();
        }
    }

    async requireTeamOwnership(req: AuthRequest, res: Request, next: NextFunction) {
        const { id: userId } = req.user;
        const teamId = req.params.id;
        const isUserOwner = await this.teamService.isUserTeamOwner(userId, teamId);
        if (!isUserOwner) {
            throw new ApiError(HttpStatus.FORBIDDEN, "The user doesn't have any permissions in the team");
        }
        next();
    }
}