import { Request } from 'express';
import { validateLogin } from '../services/userService';

function getToken(req: Request): string {
  const userCredentials = req.body;  
  const response = validateLogin(userCredentials); 
  return JSON.stringify(response);
}

export default getToken;
