import session from "express-session";
import "dotenv/config";
const MongoDBStore = require('connect-mongodb-session')(session);

const uri = process.env.MONGO_URI!;
const sessionStore = new MongoDBStore({
     uri: uri,
     collection: 'sessions'
});

// Catch errors
sessionStore.on('error', (error: Error): void => {
     console.log(error);
});

export const sessionConfig = {
     secret: process.env.SESSION_SECRET,
     cookie: { maxAge: 86400000, secure: false },
     resave: true,
     saveUninitialized: true,
     store: sessionStore
}
