import { Request, Response } from "express";
import AuthService from "./auth.service";
import { CreateUser } from "@module/user/user.schema";
import HttpStatus from "@constants/httpStatuses";

export default class AuthController {
    private service: AuthService;
    constructor(authService: AuthService) {
        this.service = authService;
    }

    async signUp(req: Request, res: Response) {
        const newUser = CreateUser.parse(req.body);
         await this.service.signUp(newUser);
        res.status(HttpStatus.CREATED).json({ ok: true});
    }
}