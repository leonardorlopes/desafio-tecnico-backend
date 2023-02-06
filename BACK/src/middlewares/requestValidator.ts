import { NextFunction, Request, Response } from 'express';
import { CardSchema } from 'src/schemas/cardSchema';
import { SchemaOf } from 'yup';
import Card from "../models/cardModel";
import validateToken from './tokenValidator';

function validateRequest(schema: SchemaOf<CardSchema>) {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {

        try {

            validateToken();

            let mustValidatePath = false;
            let mustValidateCardExist = false;
            let mustValidateBody = false;
            const method = req.method;
            let pathId = '';

            switch (method) {
                
                case 'POST':
                    mustValidateBody = true;
                    break;
                case 'PUT':
                    pathId = req.params['id'];
                    mustValidatePath = true;
                    mustValidateCardExist = true;
                    mustValidateBody = true;
                    break;
                case 'DELETE':
                    pathId = req.params['id'];
                    mustValidatePath = true;
                    mustValidateCardExist = true;
                    break;
                default:
                    next();
                    break;
            }

            if (mustValidatePath && (!pathId || pathId != req.body.id))
                return res.sendStatus(400).json("Invalid Path parameter");

            if (mustValidateCardExist) {

                const card = await Card.findOne({ id: pathId });

                if (!card) {
                    return res.sendStatus(404).json("Card does not exists.");
                }

                const now = new Date().toLocaleString('pt-br');
                const action = method === 'PUT' ? 'Alterar' : 'Remover'
                console.info(`${now} - Card ${pathId} - ${req.body.titulo} - ${action}`);
            }

            if (mustValidateBody) {

                const validatedReqBody = await schema.validate(req.body);
                req.body = validatedReqBody;
                next();
            }

            next();

        } catch (error) {
            console.error(error);
            res.sendStatus(500).json("Request is not valid");
        }
    };
}

export default validateRequest;