import { Request, Response } from "express";
import TeamService from "./team.service";
import { CreateTeam, EditTeam } from "./team.schema";
import { uuid } from "zod";
import HttpStatus from "@constants/httpStatuses";

export default class TeamController {
    private service: TeamService;
    constructor(teamService: TeamService) {
        this.service = teamService;
    }

    async createTeam(req: Request, res: Response) {
        const newTeam = CreateTeam.parse(req.body);
        const team = await this.service.createTeam(newTeam);
        res.status(HttpStatus.CREATED).json({ ok: true, team })
    }

    async getTeam(req: Request, res: Response) {
        const id = uuid().parse(req.params.id);
        const team = await this.service.getTeam(id);
        res.status(HttpStatus.OK).json({ ok: true, team });
    }

    async updateTeam(req: Request, res: Response) {
        const id = uuid().parse(req.params.id);
        const data = EditTeam.parse(req.body);
        const team = await this.service.updateTeam(id, data);
        res.status(HttpStatus.OK).json({ ok: true, team });
    }

    async deleteTeam(req: Request, res: Response) {
        const id = uuid().parse(req.params.id);
        await this.service.deleteTeam(id);
        res.status(HttpStatus.OK).json({ ok: true });
    }
}