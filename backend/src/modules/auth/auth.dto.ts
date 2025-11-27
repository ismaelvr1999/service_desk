import * as z from "zod";
import { JWTPayload } from "./auth.schema";
export type JWTPayloadDTO = z.infer<typeof JWTPayload>;