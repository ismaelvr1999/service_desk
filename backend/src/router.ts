import { Router } from "express";
const router = Router();

import authRouter from "@module/auth/auth.router";
router.use(authRouter);

export default router;