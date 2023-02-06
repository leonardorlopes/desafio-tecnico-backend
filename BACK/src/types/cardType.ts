import { Document } from 'mongoose';

interface Data {
  id: string | null | undefined;
  titulo: string | null;
  conteudo: string | null;
  lista: string | null;
}

export interface CreateCardInput {
  titulo: string;
  conteudo: string;
  lista: string;
  token: string;
}

export interface UpdateCardInput {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
  token: string;
}

export interface CardResponse { 
  status: number;  
  data: Data | null | undefined;
}

export interface CardsResponse {  
  status: number;  
  data: Array<CardDocument> | null | undefined;
}

export interface CardDocument extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}