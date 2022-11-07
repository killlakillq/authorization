import { Request, Response } from 'express';
import User from '../database/models/user.model';
// import { } from '../modules/signin';

export const auth = (req: Request, res: Response): void => {
     res.render('index', {
          index: '/signin'
      });
};

export const reg = (req: Request, res: Response): void => {
     res.render('index', {
          index: '/signup'
      });
};

export const users = (req: Request, res: Response): void => {
     res.render('users', {
          users: '/users'
      });
};

