import { NextFunction, Request, Response } from 'express';

export const logout = (req: Request, res: Response, next: NextFunction): void => {
<<<<<<< HEAD
<<<<<<< HEAD
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
=======
=======
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
     req.logout((err) => {
          if (err) {
               return next(err);
          }
          res.redirect('/');
     });
<<<<<<< HEAD
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
=======
>>>>>>> c4f644868aa56f3d8cb9aa60adbfe2f5f33dc200
};
