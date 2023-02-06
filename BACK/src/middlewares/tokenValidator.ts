import { NextFunction, Request, Response } from 'express';
const jwt = require('jsonwebtoken');

export function validateToken() {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {

        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            res.sendStatus(400).json("Header authorization is required");
        }
        const token = ('' + authHeader).replace('Bearer ', '');

        if (token) {

            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
                console.info('Token is valid to user: ' + decoded.user);
                next();
            }
            catch (err) {
                return res.sendStatus(401).json("Token is not valid");
            }
        }
    };
}

export default validateToken;