import session from "express-session";
import "dotenv/config";
const MongoDBStore = require('connect-mongodb-session')(session);

const uri = process.env.MONGO_URI!;
const sessionStore = new MongoDBStore({
     uri: uri,
     collection: 'sessions'
});

// Catch errors
sessionStore.on('error', function(error: Error): void {
     console.log(error);
});

export const sessionConfig = {
     secret: 'keyboard key',
     cookie: { maxAge: 86400000 },
     resave: false,
     saveUninitialized: true,
     store: sessionStore
}