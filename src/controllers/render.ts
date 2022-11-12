import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

export const registration = (req: Request, res: Response): void => {
     res.render('index', {
          index: '/registration',
     });
};

export const login = (req: Request, res: Response): void => {
     res.render('index', {
          index: '/login',
     });
};

export const users = (req: Request, res: Response): void => {
     res.render('users', {
          users: '/users',
     });
};

export const home = (req: Request, res: Response): void => {
     res.render('index', {
          index: '/',
     })
}

