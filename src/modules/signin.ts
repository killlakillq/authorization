import express, { Request, Response } from 'express';
import passport from 'passport';
import User from '../database/models/user.model';

export const signIn = async (req: Request, res: Response): Promise<void> => {
     const {username, password} = req.body;
     try {
          const candidate = await User.findOne({username, password});
          if (candidate) {
               res.redirect('/');
               console.log(req.session);
          } else {
               res.render('error');
          }

     } catch (err) {
          console.log(err);
     }
};


// const hashedPassword = await bcrypt.hash(req.body.password, 10);