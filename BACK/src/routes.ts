import { Express, Request, Response } from 'express';
import { getCards, postCard, putCard, deleteCard } from './controllers/cardController';
import getToken from './controllers/tokenController';
import validateRequest from './middlewares/requestValidator';
import validateUser from './middlewares/userValidator';
import validateToken from './middlewares/tokenValidator';
import cardSchema from './schemas/cardSchema';
import userSchema from './schemas/userSchema';

function routes(app: Express): void {

  app.get('/health', (_: Request, res: Response) =>
    res.status(200).send('Backend is available.')
  );

  /* TOKEN */
  app.post('/token', validateUser(userSchema), (_: Request, res: Response) => {
    const response = getToken(_);
    res.status(200).json(response);
  });

  /* CARDS */
  app.get('/cards', (_: Request, res: Response) => {

    validateToken();
    getCards().then(function (response) {
      res.status(response.status).json(JSON.stringify(response.data));
    });
  });

  app.post('/cards', (_: Request, res: Response) => {
    validateRequest(cardSchema);
    postCard(_).then(function (response) {
      res.status(response.status).json(JSON.stringify(response.data));
    });
  });

  app.put('/cards/:id', (_: Request, res: Response) => {
    validateRequest(cardSchema)
    putCard(_).then(function (response) {
      res.status(response.status).json(JSON.stringify(response.data));
    });
  });

  app.delete('/cards/:id', (_: Request, res: Response) => {
    validateRequest(cardSchema)
    deleteCard(_).then(function (response) {
      res.status(response.status).json(JSON.stringify(response.data));
    });
  });
}

export default routes;