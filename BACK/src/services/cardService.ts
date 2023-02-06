import { CreateCardInput, CardResponse, UpdateCardInput, CardsResponse } from '../types/cardType';
import Card from "../models/cardModel";

export async function get(): Promise<any> {

    try {

        const cards = await Card.find()

        return {
            status: 200,
            data: cards ? cards : [] as CardsResponse[]
        }

    } catch (err) {
        console.error(`Erro ao obter cards - Causa: ${err}`)
        return {
            status: 200,
            data: [] as CardsResponse[]
        }
    }
}

export async function post(
    cardInput: CreateCardInput
): Promise<CardResponse> {

    try {
        Card.init()
        const newCard = await Card.create(cardInput)
        return {
            status: 201,
            data: {
                id: newCard._id,
                titulo: cardInput.titulo,
                conteudo: cardInput.conteudo,
                lista: cardInput.lista
            }
        }

    } catch (err) {
        console.error(`Erro ao criar o card - ${cardInput.titulo} - Causa: ${err}`);
        return {
            status: 400,
            data: null
        };
    }
}

export async function put(
    cardInput: UpdateCardInput
): Promise<CardResponse> {

    try {
        const updatedCard = await Card.findByIdAndUpdate(cardInput.id,
            {
                titulo: cardInput.titulo,
                conteudo: cardInput.conteudo,
                lista: cardInput.lista
            })
        console.info(JSON.stringify(updatedCard));
        return {
            status: 200,
            data: {
                id: cardInput.id,
                lista: cardInput.lista,
                titulo: cardInput.titulo,
                conteudo: cardInput.conteudo,
            }
        }

    } catch (err) {
        console.error(`Erro ao atualizar o card - ${cardInput.id} - Causa: ${err}`);
        return {
            status: 400,
            data: null
        }
    }
}

export async function del(
    id: string
): Promise<CardsResponse> {

    try {

        await Card.findByIdAndDelete(id)
        const cards = await Card.find()

        return {
            status: 200,
            data: cards ? cards : []
        }

    } catch (err) {
        console.error(`Erro ao deletar o card - ${id} - Causa: ${err}`);
        return {
            status: 400,
            data: null
        }
    }
}