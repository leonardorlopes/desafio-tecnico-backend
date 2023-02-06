import { Schema, model } from 'mongoose';
import { UserDocument } from 'src/types/userType';

const userSchema = new Schema(
  {
    userName: { type: String, required: true },    
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model<UserDocument>('User', userSchema);

export default User;