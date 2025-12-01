import { Router } from "express";
const router = Router();

import authRouter from "@module/auth/auth.router";
router.use(authRouter);

import teamRouter from "@module/team/team.router";
router.use(teamRouter);
export default router;