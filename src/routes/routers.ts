import * as express from 'express';
import { isAuthenticated } from '../config/passport';
import { auth, login, registration, users } from '../controllers/render';
import { signIn } from '../modules/signin';
import { signUp } from '../modules/signup';
import { handleValidationErrors, validation } from '../modules/validator';

const router = express.Router();

router.get('/login', login);
router.get('/registration', registration);
router.post('/login', signIn);
router.post('/registration', signUp);
router.get('/users', isAuthenticated, users);

export = router;
