import * as express from 'express';
import { isAuthenticated, passportAuthenticate } from '../config/passport';
import { home, login, registration, session, users } from '../controllers/render';
import { logout } from '../modules/logout';
import { signIn } from '../modules/signin';
import { signUp } from '../modules/signup';
import { handleValidationErrors, validation } from '../modules/validator';

const router = express.Router();

router.get('/', home);
router.get('/login', login);
router.get('/registration', registration);
router.get('/users', isAuthenticated, users);
router.get('/logout', logout);
router.post('/login', validation, handleValidationErrors, passportAuthenticate, signIn);
router.post('/registration', validation, handleValidationErrors, signUp);
router.use(session);

export = router;
