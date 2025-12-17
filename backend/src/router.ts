import { Router } from "express";
const router = Router();

import authRouter from "@module/auth/auth.router";
router.use(authRouter);

import teamRouter from "@module/team/team.router";
router.use(teamRouter);

import ticketRouter from "@module/ticket/ticket.router";
router.use(ticketRouter);

import userRouter from "@module/user/user.router";
router.use(userRouter);
export default router;