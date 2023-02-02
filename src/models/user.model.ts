import { model, Schema, Types } from "mongoose";

interface Users {
    _id: Types.ObjectId;
    avatar: string;
    nom: string;
    prenoms: string;
    contact: string;
    pays: string;
    ville: string
    email: string;
    compte: Types.ObjectId
    artiste?: Types.ObjectId

}

const userSchema = new Schema<Users>({
    _id: { type: Schema.Types.ObjectId },
    avatar: { type: String },
    nom: { type: String },
    prenoms: { type: String },
    contact: { type: String },
    ville: { type: String },
    pays: { type: String },
    email: { type: String },
    compte: { type: Schema.Types.ObjectId, ref: 'Compte' },
    artiste: {type: Schema.Types.ObjectId, ref: 'Artiste'}
})

const User = model('User', userSchema)

export default User