import { Document, model, Schema, Types } from "mongoose"
import { ArtisteDoc } from "./artiste.model"
import { UsersDoc } from "./user.model"

interface AccompteDoc extends Document{
    _id: Types.ObjectId
    owner: UsersDoc | ArtisteDoc
    ownerType: string
    username: string
    password: string
    abonnement: string
    statut: string
    type_compte: string
}

const CompteSchema = new Schema<AccompteDoc>({
    _id: {type: Schema.Types.ObjectId},
    owner: {type: Schema.Types.ObjectId, refPath: 'ownerType'},
    ownerType: {type: String, enum: ['User', 'Artiste']},
    username: {type: String},
    password: {type: String},
    abonnement: {type: String, enum: ['Standard', 'Premium'], default: 'Standard'},
    statut: {type: String, enum: ['Actif', 'Suspendu'], default: 'Actif'},
    type_compte: {type: String, enum: ['Grand Public', 'Professionnel'], default: 'Grand Public'}
})

const Compte = model<AccompteDoc>('Compte', CompteSchema)
export default Compte