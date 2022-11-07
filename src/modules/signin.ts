import express, { Request, Response } from 'express';
import passport from 'passport';
import User from '../database/models/user.model';
import { comparePassword } from './bcrypt';

export const signIn = async (req: Request, res: Response): Promise<void> => {
     const { username, password } = req.body;
     try {
          const user = await User.findOne({ username });
          if (!user) {
               res.status(404).json({ message: "User not found"});
          }
          const compare = await comparePassword(password, user!.password);
          if (!compare) {
               res.status(400).json({ message: "Wrong password"});
          }
          res.render('users'); // TODO redirect users when will be session
     } catch (err) {
          console.log(err); // TODO json send error
     }
};

