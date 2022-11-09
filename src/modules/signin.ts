import express, { Request, Response } from 'express';
import passport from 'passport';
import User from '../database/models/user.model';
import { comparePassword } from './bcrypt';

export const signIn = async (req: Request, res: Response) => {
     const { username, password } = req.body;

     if (!username || !password) {
          return res.status(400).json({ message: "Please filled the field correctly" });
     }
     try {
          const user = await User.findOne({ username: username });
          if (!user) {
               return res.status(404).json({ message: "User not found"} );
          }
          const compare = await comparePassword(password, user!.password);
          if (!compare) {
               return res.status(400).json({ message: "Wrong password" });
          }
          res.status(200).send(user) // TODO redirect users when will be session
     } catch (err) {
          res.status(500).send(err);
     }
};

