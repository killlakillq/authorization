import * as express from 'express';
import { auth, reg } from '../controllers/render';

const router = express.Router();

router.get('/signin', auth);
router.get('/signup', reg);

export = router;
