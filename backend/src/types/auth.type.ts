import { Request } from "express";
import { JWTPayloadDTO } from "@module/auth/auth.dto";

export interface AuthRequest extends Request{
    user: JWTPayloadDTO; 
}