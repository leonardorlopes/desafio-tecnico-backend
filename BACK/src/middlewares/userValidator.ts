import { NextFunction, Request, Response } from 'express';
import { UserSchema } from 'src/schemas/userSchema';
import { SchemaOf } from 'yup';

export function validateUser(schema: SchemaOf<UserSchema>) {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const validatedReqBody = await schema.validate(req.body);
            req.body = validatedReqBody;
            next();

        } catch (error: any) {
            res.status(500).json(error.message);
        }
    };
}

export default validateUser;