import { CardDocument } from 'src/types/cardType';
import { Schema, model } from 'mongoose';


const cardSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId, required: false },
        titulo: { type: String, require: true },
        conteudo: { type: String, require: true },
        lista: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

const Card = model<CardDocument>('Card', cardSchema);

export default Card;
