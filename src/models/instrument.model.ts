import { model, Schema, Types } from "mongoose";

interface instrus {
    __id: Types.ObjectId,
    nom: string
}

const instruSchema = new Schema<instrus>({
    __id: {type: Schema.Types.ObjectId},
    nom: {type: String}
})



const Instruments = model('Instrument', instruSchema)


export default Instruments