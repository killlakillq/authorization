// import session from "express-session"
// import mongoose from "mongoose";
// import "dotenv/config";
// const MongoDBStore = require('connect-mongodb-session')(session);

// const uri = process.env.MONGO_URI!;

// const connection = mongoose.connect(uri);
// const sessionStore = new MongoDBStore({
//      MongooseConnection: connection,
//      collection: 'users'
// });

// export const sessionConfig = {
//      secret: 'keyboard key',
//      cookie: { maxAge: 86400000, secure: true },
//      resave: false,
//      saveUninitialized: false,
//      store: sessionStore
// }