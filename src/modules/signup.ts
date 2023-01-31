import express, { Request, Response } from 'express';
import User from '../database/models/user.model';
import { hashedPassword } from './bcrypt';

<<<<<<< HEAD
<<<<<<< HEAD
export const signUp = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const hash = await hashedPassword(password);
	try {
		await User.create({
			username: username,
			password: hash,
		});
		return res.status(200).redirect('/login');
	} catch (err) {
		console.log(err);
	}
};
=======
=======
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
export const signUp = async (req: Request, res: Response): Promise<void> => {
     const { username, password } = req.body;
     const hash = await hashedPassword(password);
     try {
          await User.create({
               username: username,
               password: hash
          });
          return res.status(200).redirect('/login');
     } catch (err) {
          console.log(err);
     } 
}
<<<<<<< HEAD
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
=======
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
