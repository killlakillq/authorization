import * as express from 'express';
import { isAuthenticated } from '../config/passport';
import { auth, reg, users } from '../controllers/render';
import { signIn } from '../modules/signin';
import { signUp } from '../modules/signup';
import { handleValidationErrors, validation } from '../modules/validator';

const router = express.Router();

router.get('/signin', auth);
router.get('/signup', reg);
router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/users', isAuthenticated, users);

export = router;
