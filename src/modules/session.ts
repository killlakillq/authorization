<<<<<<< HEAD
import session from 'express-session';
import 'dotenv/config';
=======
import session from "express-session";
import "dotenv/config";
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
const MongoDBStore = require('connect-mongodb-session')(session);

const uri = process.env.MONGO_URI!;
const sessionStore = new MongoDBStore({
<<<<<<< HEAD
	uri: uri,
	collection: 'sessions',
=======
     uri: uri,
     collection: 'sessions'
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
});

// Catch errors
sessionStore.on('error', (error: Error): void => {
<<<<<<< HEAD
	console.log(error);
});

export const sessionConfig = {
	secret: process.env.SECRET!,
	cookie: { maxAge: 86400000, secure: false },
	resave: true,
	saveUninitialized: true,
	store: sessionStore,
};
=======
     console.log(error);
});

export const sessionConfig = {
     secret: process.env.SESSION_SECRET!,
     cookie: { maxAge: 86400000, secure: false },
     resave: true,
     saveUninitialized: true,
     store: sessionStore
}
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
