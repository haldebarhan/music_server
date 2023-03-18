import { Document, model, Schema, Types } from "mongoose";

export interface UsersDoc extends Document {
  _id: Types.ObjectId;
  avatar?: string;
  nom: string;
  prenoms: string;
  contact: string;
  pays: string;
  email: string;
  annonces: Types.ObjectId[];
}

const userSchema = new Schema<UsersDoc>({
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

const User = model<UsersDoc>("User", userSchema);

export default User;
