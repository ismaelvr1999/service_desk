import HttpStatus from "@constants/httpStatuses";
import { JWTPayload } from "@module/auth/auth.schema";
import { AuthRequest } from "@/src/types/auth.type";
import ApiError from "@utils/apiError";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default class AuthMiddleware {
    constructor(private secret: string) { }

    authUser(req: Request, res: Response, next: NextFunction) {
        const token = req.cookies.auth;
        if (!token) {
            throw new ApiError(HttpStatus.UNAUTHORIZED, "Not authorized, no token");
        }
        try {
            const decoded = jwt.verify(token, this.secret);
            const user = JWTPayload.parse(decoded);
            (req as AuthRequest).user = user;
            next();
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw new ApiError(HttpStatus.UNAUTHORIZED, "Token expired");
            }
            if (error instanceof jwt.JsonWebTokenError) {
                throw new ApiError(HttpStatus.UNAUTHORIZED, "Invalid token");
            }
            next(error);
        }

    }
}