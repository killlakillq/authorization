import { Request, NextFunction, Response } from 'express';
import { check, oneOf, validationResult } from 'express-validator';
import util from 'node:util';

export const validation = [
     oneOf([
          check('username')
               .exists()
               .withMessage('username is required')
               .isLength({ min: 3 })
               .withMessage('wrong username length'),

          check('username')
               .exists()
               .withMessage('username is required')
               .isEmail()
               .withMessage('username not valid'),
     ]),
     check('password').exists().withMessage('password is required').isLength({ min: 7 }),
];

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          console.log(util.inspect(errors.array()));
          // return res.status(422).json({ errors.array() });
          res.render('error')
     }

     next();
};
