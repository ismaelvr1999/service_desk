import HttpStatus from "@constants/httpStatuses";
import ApiError from "@utils/apiError";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import router from "./router";
import { ZodError } from "zod";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", async (req, res) => {
    res.status(200).json({ ok: true, status: HttpStatus.OK });
});

app.use("/api", router);

//handler errors
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    //console.error(error);
    if (error instanceof ZodError) {
        res.status(HttpStatus.BAD_REQUEST).json({ ok: false, status: HttpStatus.BAD_REQUEST, message: error.issues });
        return;
    }

    if (error instanceof ApiError) {
        res.status(error.status).json({ ok: false, status: error.status, message: error.message });
        return;
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ ok: false, status: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message });
})
export default app;