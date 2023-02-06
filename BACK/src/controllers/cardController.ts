import { Request } from 'express';
import { get, post, put, del } from '../services/cardService';
import { CardResponse, CardsResponse } from '../types/cardType';


export async function getCards(): Promise<CardsResponse> {
    return await get();          
}

export async function postCard(req: Request): Promise<CardResponse> {
    return await post(req.body);    
}

export async function putCard(req: Request): Promise<CardResponse> {
    return await put(req.body);
}

export async function deleteCard(req: Request): Promise<CardsResponse> {
    return await del(req.params['id']);
}