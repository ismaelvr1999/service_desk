import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import ApiError from "./apiError";
import HttpStatus from "@constants/httpStatuses";
const handlerPrismaError = (error: any) => {
    if (error instanceof PrismaClientKnownRequestError) {
        throw new ApiError(HttpStatus.BAD_REQUEST,
            `Prisma error code: ${error.code} `);
    }
    throw error;
};

export default handlerPrismaError;