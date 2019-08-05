const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const Users = require("../model/Users");

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/api/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile here", profile.id);
      const existingUser = await Users.findBy({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await Users.add({ googleId: profile.id });
      console.log("2nd", user);
      done(null, user);
    }
  )
);
