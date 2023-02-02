import mongoose, {Schema, Types} from "mongoose";
interface Ad {
    titre: string;
    description: string;
    categorie: string;
    type_pub: string;
    advertiser: Types.ObjectId;
    createdAt: string;
    product?: Object
}

const AdSchema = new Schema<Ad>({
    titre: {type: String},
    description: {type: String},
    categorie: {type: String, enum: ['Location', 'Vente', 'Service', 'Annonce']},
    type_pub: {type: String},
    advertiser: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: String},
    product: {type: Schema.Types.Mixed}
})

const Publication = mongoose.model('Publication', AdSchema)


export default Publication