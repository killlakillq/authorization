import passportLocal from 'passport-local';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user.model';
import { comparePassword } from '../modules/bcrypt';

const LocalStrategy = passportLocal.Strategy;

passport.use(
     new LocalStrategy({
          usernameField: 'username',
          passwordField: 'password'
     }, async (username, password, done) => {
          const user = await User.findOne({ username });

          if (user && (await comparePassword(password, user.password))) {
               return done(null, user);
          } else {
               return done(null, false);
          }

     }
  )
);

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
     if (req.isAuthenticated()) {
          return next();
     }
     res.redirect('/login');
};

passport.serializeUser((user, done) => {
     done(null, user);
});

passport.deserializeUser(async (id, done) => {
     try {
          const user = await User.findById(id);
          done(null, user);

     } catch (err) {
          done(err);
     }
});
