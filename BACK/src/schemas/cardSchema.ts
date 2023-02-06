import * as yup from 'yup';

export interface CardSchema {
    lista: string;
    titulo: string;
    conteudo: string;    
}

const cardSchema: yup.SchemaOf<CardSchema> = yup.object().shape({
    lista: yup.string().required({ message: 'Lista is required.' }),
    titulo: yup.string().required({ message: 'Titulo is required.' }),
    conteudo: yup.string().required({ message: 'Conteudo is required.' }),    
});

export default cardSchema;