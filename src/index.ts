import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import 'ejs';
import path from 'node:path';
import router from './routes/routers';
const app: Express = express();

dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
          console.log(`Server is running at https://localhost:${PORT}`);
});
