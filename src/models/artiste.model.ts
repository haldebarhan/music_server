import { Document, model, Schema, Types } from "mongoose"

export interface ArtisteDoc extends Document {
    _id: Types.ObjectId
    avatar?: string
    nom: string
    prenoms: string
    contact: string
    email: string
    pays: string
    metiers: string[]
    style_musical?: [string]
    instruments?: [string]
    fichiers: string[]
    annonces: Types.ObjectId[]
}

const artisteSchema = new Schema<ArtisteDoc>({
    _id: {type: Schema.Types.ObjectId},
    avatar: {type: String},
    nom: {type: String},
    prenoms: {type: String},
    contact: {type: String},
    email: {type: String},
    pays: {type: String},
    metiers: {type: [String]},
    style_musical: {type: [String]},
    instruments: {type: [String]},
    fichiers: {type: [String]},
    annonces: {type: [Schema.Types.ObjectId]}
})

const Artiste = model<ArtisteDoc>('Artiste', artisteSchema)

export default Artiste