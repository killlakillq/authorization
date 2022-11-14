import express, { Request, Response } from 'express';
import passport from 'passport';
import User from '../database/models/user.model';
import { comparePassword } from './bcrypt';
import { generateAccessToken } from './token';
import jwt from 'jsonwebtoken';

export const signIn = async (req: Request, res: Response) => {
     const { username, password } = req.body;

     if (!username || !password) {
          return res.status(400).json({ message: "Please filled the field correctly" });
     }
     try {
          const user = await User.findOne({ username: username });
          const compare = await comparePassword(password, user!.password);
          if (!user || !compare) {
               return res.status(404).json({ message: "Wrong username or password" });
          }
          
          const token = generateAccessToken(user._id, user.username);
          return res.status(200).json({token});

     } catch (err) {
          return res.status(500).json({ message: err });
     }
};

