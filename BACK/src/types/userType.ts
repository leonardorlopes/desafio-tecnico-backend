import { Document } from 'mongoose';

export interface LoginUserInput {
  userName: string;
  password: string;
}

export interface LoginUserResponse {  
  success: boolean;
  status: number;
  message: string;
  userName: string;  
  token: string;
}

export interface UserDocument extends Document { 
  userName: string;
}