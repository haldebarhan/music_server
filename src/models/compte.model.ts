import { model, Schema, Types } from "mongoose"

interface Accompte {
    _id: Types.ObjectId
    owner: Types.ObjectId
    username: string
    password: string
    abonnement: string
    statut: string
    type_compte: string
}

const CompteSchema = new Schema<Accompte>({
    _id: {type: Schema.Types.ObjectId},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    username: {type: String},
    password: {type: String},
    abonnement: {type: String, enum: ['Standard', 'Premium'], default: 'Standard'},
    statut: {type: String, enum: ['Actif', 'Suspendu'], default: 'Actif'},
    type_compte: {type: String, enum: ['Grand Public', 'Professionnel'], default: 'Grand Public'}
})

const Compte = model('Compte', CompteSchema)
export default Compte