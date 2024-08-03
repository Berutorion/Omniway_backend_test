import mongoose, { Document, Schema } from 'mongoose';

// type

export interface IUser extends Document {
  username: string;
  password: string;
  isActive: boolean;
  avatar: string // base64 encode image
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive : {type : Boolean, required: true, default: true},
  avatar: {type : String, required: true , default: ''}
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;