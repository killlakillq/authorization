import { NextFunction, Request, Response } from 'express';
// import passport from 'passport';

export const logout = (req: Request, res: Response, next: NextFunction): void => {
     req.logout((err) => {
          if (err) {
               return next(err);
          }
          res.redirect('/');
     });
};
