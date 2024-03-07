import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_KEY = process.env.JWT_KEY



function verifyAccessToken(token){JWT_KEY
    const data = jwt.verify(token, )
    console.log("verify", data)
    return jwt.sign(data, JWT_KEY, {
        expiresIn: '30m'
    })
}

function generateAccessToken(data){
    return jwt.sign(data, JWT_KEY, {expiresIn: '30m'})
}

function generateRefreshToken(data){
    return jwt.sign(data, JWT_KEY, {expiresIn: '12h'})
}

function verifyToken(token){
    return jwt.verify(token, JWT_KEY, (err, user)=>{
        if(err){
            return err
        } 
        return user
    })
}

export {
    verifyAccessToken,
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
}