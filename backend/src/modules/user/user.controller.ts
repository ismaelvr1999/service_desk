import { Response } from "express";
import { JWTPayload } from "@module/auth/auth.schema";
import UserService from "./user.service";
import { AuthRequest } from "@/src/types/auth.type";
import HttpStatus from "@constants/httpStatuses";
export default class UserController {
    private service: UserService;

    constructor(userService: UserService) {
        this.service = userService;
    }

    async getUserProfile(req: AuthRequest, res: Response) {
        const { id } = JWTPayload.parse(req.user);
        const profile = await this.service.getProfile(id);
        res.status(HttpStatus.OK).json({ ok: true, profile })
    }

    async getUserTeams(req: AuthRequest, res: Response) {
        const { id } = JWTPayload.parse(req.user);
        const teams = await this.service.getUserTeams(id);
        res.status(HttpStatus.OK).json({ ok: true, teams });
    }

    async getUserSentTickets(req: AuthRequest, res: Response) {
        const { id } = JWTPayload.parse(req.user);
        const tickets = await this.service.getUserSentTickets(id);
        res.status(HttpStatus.OK).json({ ok: true, tickets });
    }
}