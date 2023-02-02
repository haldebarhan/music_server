import { model, Schema, Types } from "mongoose";

interface Activities {
    _id: Types.ObjectId,
    artiste: Types.ObjectId
    activite: Schema.Types.Mixed[]
}

const ActivitiesSchema = new Schema<Activities>({
    _id: {type: Schema.Types.ObjectId},
    artiste: { type: Schema.Types.ObjectId, ref: 'User' },
    activite: { type: [Schema.Types.Mixed] },
})

const Activites = model('Activites', ActivitiesSchema)

export default Activites