import { model, Schema, Types } from "mongoose";

interface Categories {
    _id: Types.ObjectId, 
    nom: string
}


const CategorieSchema = new Schema<Categories>({
    _id: Schema.Types.ObjectId,
    nom: {type: String}
})

const Categorie = model('categorie', CategorieSchema)

export default Categorie