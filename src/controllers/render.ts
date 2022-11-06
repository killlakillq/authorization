import { Request, Response } from 'express';

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