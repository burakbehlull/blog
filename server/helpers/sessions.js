import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_KEY = process.env.JWT_KEY



function verifyAccessToken(token){
    try {
        const data = jwt.verify(token, JWT_KEY);
        console.log("verify", data);
        return jwt.sign({
            username: data.username,
            email: data.email
        }, JWT_KEY, {
            expiresIn: '30m'
        });
    } catch (err) {
        console.error("Token verification error:", err);
        throw new Error("Token verification failed " + err);
    }
}


function generateAccessToken(data){
    return jwt.sign(data, JWT_KEY, {expiresIn: '30m'})
}

function generateRefreshToken(data){
    return jwt.sign(data, JWT_KEY, {expiresIn: '12h'})
}

function verifyToken(token){
    try {
        const user = jwt.verify(token, JWT_KEY);
        return user;
    } catch (err) {
        return err;
    }
}

export {
    verifyAccessToken,
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
}