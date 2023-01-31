import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import User, { UserDocument } from '../database/models/user.model';
import { comparePassword } from '../modules/bcrypt';
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

passport.use(
     new LocalStrategy((username, password, done) => {
          User.findOne({ username: username })
               .then(async (user) => {
                    if (!user) {
                         return done(null, false);
                    }
                    if (await comparePassword(password, user!.password)) {
                         return done(null, user);
                    } else {
                         return done(null, false);
                    }
               })
               .catch((err) => done(err));
     })
);

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
     if (!req.isAuthenticated()) {
          return res.redirect('/login');
     }
     next();
};

passport.serializeUser<any, any>((req, user, done) => {
     done(undefined, user);
});

passport.deserializeUser((id, done) => {
     User.findById(id, (err: Error, user: UserDocument) => {
          done(err, user);
     });
});

export const passportAuthenticate = passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/users' });
