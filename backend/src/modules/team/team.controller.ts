import { Request, Response } from "express";
import TeamService from "./team.service";
import { AddAgent, CreateTeam, EditTeam, RemoveAgent } from "./team.schema";
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

    async addAgent(req: AuthRequest, res: Response) {
        const teamId = uuid().parse(req.params.id);
        const newAgent = AddAgent.parse(req.body);
        newAgent.teamId = teamId;
        await this.service.addAgent(newAgent);
        res.status(HttpStatus.OK).json({ ok: true });
    }

    async removeAgent(req: AuthRequest, res: Response) {
        const agent = RemoveAgent.parse(req.body);
        const teamId = RemoveAgent.shape.teamId.parse(req.params.id);
        agent.teamId = teamId;
        await this.service.removeAgent(agent);
        res.status(HttpStatus.OK).json({ ok: true });
    }
    async getTeamAgents(req: AuthRequest, res: Response) {
        const teamId = uuid().parse(req.params.id);
        const team = await this.service.getTeamAgents(teamId);
        res.status(HttpStatus.OK).json({ ok: true, agents: team?.agents });
    }
}