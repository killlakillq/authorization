import express, { Request, Response } from 'express';
import passport from 'passport';
import User from '../database/models/user.model';
import { hashedPassword } from './bcrypt';

export const signUp = async (req: Request, res: Response): Promise<void> => {
     const { username, password } = req.body;
     const hash = await hashedPassword(password);
     try {
          const user = User.create({
               username: username,
               password: hash
          });
          res.status(200).send(user);
     } catch (err) {
          console.log(err);
     } 
}
