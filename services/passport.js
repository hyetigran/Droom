const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const Users = require("../model/Users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then(user => {
    done(null, user);
  });
  // .catch(err => {
  //   console.log(err);
  // });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await Users.findby(profile.id);
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await Users.add({ googleId: profile.id });
      done(null, user);
    }
  )
);
