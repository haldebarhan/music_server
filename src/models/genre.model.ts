import { model, Schema, Types } from "mongoose";

interface Genres {
    _id: Types.ObjectId, 
    nom: string
}


const GenreSchema = new Schema<Genres>({
    _id: Schema.Types.ObjectId,
    nom: {type: String}
})

const Genre = model('Genre', GenreSchema)

export default Genre