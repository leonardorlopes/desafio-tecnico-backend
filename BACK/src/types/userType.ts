import { Document } from 'mongoose';

export interface ReturnType<T> {
  success: boolean;
  status: number;
  message: string;
  data: T | string | null;
}

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

export interface ResourceAuth {
  isAuth: boolean;
  userName: string;
  token: string;
}

export interface UserDocument extends Document { 
  userName: string;
}
