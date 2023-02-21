import { model, Schema, Types } from "mongoose";

interface Users {
  _id: Types.ObjectId;
  avatar?: string;
  nom: string;
  prenoms: string;
  contact: string;
  pays: string;
  email: string;
  annonces: Types.ObjectId[];
}

const userSchema = new Schema<Users>({
  _id: { type: Schema.Types.ObjectId },
  avatar: { type: String },
  nom: { type: String },
  prenoms: { type: String },
  contact: { type: String },
  pays: { type: String },
  email: { type: String },
  annonces: [
    {
      type: Schema.Types.ObjectId,
      ref: "Publication",
    },
  ],
});

const User = model("User", userSchema);

export default User;
