const passport = require("passport");
const { ExtractJwt } = require("passport-jwt");
const db = require("../db/models");
const JWTStrategy = require('passport-jwt').Strategy
require('dotenv').config()

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
        secretOrKey: process.env.JWT_SECRETKEY
    },
    async (payload, done) => {
        console.log(payload);
        try {
            let user = await db.User.findOne(
                {
                    where: {
                        id: payload.sub
                    }
                }
            )

            if (!user) {
                return done(null, false)
            }
            if (user) {
                return done(null, user)
            }
        } catch (error) {
            return done(error, false)
        }
    }
))