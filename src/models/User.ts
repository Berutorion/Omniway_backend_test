import { hashPassword } from '@src/util/PwdUnit';
import mongoose, { Document, Schema } from 'mongoose';

// type

export interface IUser extends Document {
  username: string;
  password: string;
  isActive: boolean;
  avatar: string // base64 encode image
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive : {type : Boolean, required: true, default: true},
  avatar: {type : String, required: true , default: ''}
});

// hash password before saving
UserSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next();
  }
  user.password = await hashPassword(user.password);
  next();
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;