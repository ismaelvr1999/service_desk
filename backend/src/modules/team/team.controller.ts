import { Request, Response } from "express";
import TeamService from "./team.service";
import { CreateTeam, EditTeam } from "./team.schema";
import { uuid } from "zod";
import HttpStatus from "@constants/httpStatuses";
import { AuthRequest } from "@/src/types/auth.type";

export default class TeamController {
    private service: TeamService;
    constructor(teamService: TeamService) {
        this.service = teamService;
    }

    async createTeam(req: AuthRequest, res: Response) {
        const newTeam = CreateTeam.parse(req.body);
        const team = await this.service.createTeam(newTeam);
        res.status(HttpStatus.CREATED).json({ ok: true, team })
    }

    async getTeam(req: AuthRequest, res: Response) {
        const id = uuid().parse(req.params.id);
        const team = await this.service.getTeam(id);
        res.status(HttpStatus.OK).json({ ok: true, team });
    }

    async updateTeam(req: AuthRequest, res: Response) {
        const id = uuid().parse(req.params.id);
        const data = EditTeam.parse(req.body);
        const team = await this.service.updateTeam(id, data);
        res.status(HttpStatus.OK).json({ ok: true, team });
    }

    async deleteTeam(req: AuthRequest, res: Response) {
        const id = uuid().parse(req.params.id);
        await this.service.deleteTeam(id);
        res.status(HttpStatus.OK).json({ ok: true });
    }
}