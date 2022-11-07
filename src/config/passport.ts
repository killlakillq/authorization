import passportLocal from 'passport-local';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user.model';

const LocalStrategy = passportLocal.Strategy;


passport.use(
     new LocalStrategy(
          {
               usernameField: 'username',
               passwordField: 'password',
          },
          async (username, password, done) => {
               try {
                    // check if user exists
                    const userExists = await User.findOne({ username: username });
                    if (userExists) {
                         return done(null, false);
                    }
                    // Create a new user with the user data provided
                    const user = await User.create({ username, password });
                    return done(null, user);
               } catch (error) {
                    done(error);
               }
          }
     )
)


export const isAuthenticated = (
     req: Request,
     res: Response,
     next: NextFunction
): void => {
     if (req.isAuthenticated()) {
          return next();
     }
     res.redirect('/signin');
};

/**
 * Authorization Required middleware.
 */

