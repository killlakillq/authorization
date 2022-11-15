import { model, Schema } from 'mongoose';

// Document interface
export type UserDocument = {
     username: string;
     password: string;
}

// Schema
const User = new Schema<UserDocument>({
     username: { type: String, required: true, unique: true },
     password: { type: String, required: true }
});

export default model('User', User);

