import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirm: {
      type: Boolean,
      default: true,
    },
  },
  { collection: 'users', timestamps: true },
);

const userModel = model<User & Document>('User', userSchema);

export default userModel;
