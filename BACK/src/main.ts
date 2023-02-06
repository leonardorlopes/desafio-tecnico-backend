import express from 'express';
import routes from './routes';
import { mongoDbConnect } from './services/databaseService';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, JSON.stringify(req.headers), req.body);
  next();
})

app.listen(process.env.APP_PORT, () => {
  routes(app);
  mongoDbConnect();
  console.log(`Backend is up and waiting for requests on port:  ${process.env.APP_PORT}`);
});