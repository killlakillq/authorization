import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import 'ejs';
import path from 'node:path';
import router from './routes/routers';
import passport from 'passport';
import mongoose from 'mongoose';

const app: Express = express();

dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// middlewares
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
// init passport on every route call.
app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({
//      secret: process.env.SECRET!,
//      resave: false,
//      saveUninitialized: true,
//      cookie: { secure: true, maxAge: 1000 * 60 * 60 * 24 }
//    }))

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
     try {
          await mongoose.connect(process.env.MONGO_URI!)
          console.log(`Server is running at https://localhost:${PORT}`);
     } catch (err) {
          console.log(err);
     }
});
