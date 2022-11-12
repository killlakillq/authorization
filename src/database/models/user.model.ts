import { model, Schema } from 'mongoose';
import { comparePassword } from '../../modules/bcrypt';

// Document interface
export type UserDocument = {
     username: string;
     password: string;
     token: string;
}

// Schema
const User = new Schema<UserDocument>({
     username: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     token: { type: String },
});

export default model('User', User);

