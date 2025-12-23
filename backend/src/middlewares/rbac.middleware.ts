import { AuthRequest } from "@/src/types/auth.type";
import { NextFunction, Request } from "express";
import { uuid } from "zod";
import UserService from "@module/user/user.service";
import ApiError from "@utils/apiError";
import HttpStatus from "@constants/httpStatuses";
//Role-based access control
export default class RBAC {
    constructor(private userService: UserService) { }

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

    requireOwnership(){
        
    }
}