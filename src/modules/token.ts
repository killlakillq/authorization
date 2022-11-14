import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import user, { UserDocument } from '../database/models/user.model';
import { Types } from 'mongoose';

export const generateAccessToken = (id: Types.ObjectId, username: string) => {
     const payload = {
          id,
          username
     }
     return jwt.sign(payload, process.env.TOKEN_SECRET!, { expiresIn: '24h' });
}