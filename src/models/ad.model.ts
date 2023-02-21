import mongoose, { Schema, Types } from "mongoose";
interface Ad {
  _id: Types.ObjectId
  titre: string;
  description: object[];
  categorie: string;
  type_annonce: string;
  advertiser: Types.ObjectId;
  createdAt: string;
  fichier: string[];
}

const AdSchema = new Schema<Ad>({
  _id: {type: Schema.Types.ObjectId},
  titre: { type: String },
  description: { type: [Object] },
  categorie: { type: String },
  type_annonce: {
    type: String,
    enum: ["VIP", "Standard"],
    default: "Standard",
  },
  advertiser: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: String },
  fichier: { type: [String] },
});

const Publication = mongoose.model("Publication", AdSchema);

export default Publication;
