import api from '../services/api'

const TOKEN_PATH = "/login"
const CARD_PATH = "/cards";
const BYPASS_CREDENTIALS = { "userName": "letscode", "password": "lets@123" };

async function getToken() {

    try {
        const response = await api.post(TOKEN_PATH, BYPASS_CREDENTIALS,
            { headers: { "Content-Type": "application/json" } });

        const data = response.data;
        return JSON.parse(data).token;
    } catch (err) {
        throw new Error('GET Token thows exception: ' + err);
    }
}

export async function getCards() {

    try {
        const token = await getToken();

        if (!token) throw new Error('GET Token failed.');

        let authHeader = `Bearer ${token}`;

        const options = {
            method: 'GET',
            url: CARD_PATH,
            headers: {
                'Content-Type': 'application/json',
                'authorization': authHeader
            },
        }

        const response = await api(options);

        if (response.status === 200 && response.data) {
            return response.data;
        }
        return [];

    } catch (e) {
        console.error('GET Cards failed: ' + e);
        return [];
    }
}

export async function addCard(card) {
    try {
        const token = await getToken();

        if (!token) throw new Error('GET Token failed.');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const response = await api.post(CARD_PATH, card, { headers: headers });

        const data = response.data;
        return JSON.parse(data);

    } catch (err) {
        throw new Error('POST Card failed: ' + err);
    }
}

export async function updateCard(card) {
    try {
        const token = await getToken();

        if (!token) throw new Error('GET Token failed.');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const response = await api.put(`${CARD_PATH}/${card.id}`, card, { headers: headers });

        const data = response.data;
        return JSON.parse(data);
    } catch (err) {
        throw new Error('Erro ao obter token: ' + err);
    }
}

export async function removeCard(id) {
    try {
        const token = await getToken();

        if (!token) throw new Error('GET Token failed.');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const response = await api.delete(`${CARD_PATH}/${id}`,
            { headers: headers });

        const data = response.data;
        return JSON.parse(data);
    } catch (err) {
        throw new Error('Erro ao obter token: ' + err);
    }
}