import passport from "passport"
import passportGoogle from "passport-google-oauth20"

const GoogleStrategy = passportGoogle.Strategy

function GoogleAuthMiddleware(){

    const auth = passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/redirect"
    },
    async (accessToken, refreshToken, profile, done)=>{},
    ))

    passport.serializeUser((user, done)=> {
        done(null, user.id)
    })

    passport.deserializeUser((id, done)=> {
        done(null, user)
    })
    
    return auth
}

export default GoogleAuthMiddleware