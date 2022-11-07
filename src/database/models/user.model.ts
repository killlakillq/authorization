import { model, Schema } from 'mongoose';

// Document interface
interface User {
     username: string;
     password: string;
}

// Schema
const User = new Schema<User>({
     username: { type: String, required: true },
     password: { type: String, required: true },
});

export default model('User', User);

