import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/User.js'
dotenv.config()
const JWT_KEY = process.env.JWT_KEY

function generateRefreshToken(data){
    return jwt.sign(data, JWT_KEY, {expiresIn: '10h'})
}

function generateAccessToken(data){
    return jwt.sign(data, JWT_KEY, {expiresIn: '30m'})
}

function isExpired(token){
    try {
        const isVerify = jwt.verify(token, JWT_KEY)
        console.log(isVerify)
        return {expired: false}
    } catch (err) {
        console.log('is err')
        if (err.name === 'TokenExpiredError') {
            console.log('Expired')
            return {expired: true}
        }
        console.log('nulll')
        return null
    }
}

async function userUpdate(email, value){
    const updateValue = await User.findOne({email: email})
    updateValue.token = value
    updateValue.save()
    return updateValue
}

function verifyAccessToken(user){
    try {
        let {expired} = isExpired(user.token)
        let isToken = generateRefreshToken({email: user.email})
        if(expired){
            userUpdate(user.email, isToken)
            return generateAccessToken({email: user.email})
        } 
        return generateAccessToken({email: user.email})
        

    } catch (err) {
        console.log(err)
    }
}

export {
    verifyAccessToken,
    generateAccessToken,
    generateRefreshToken,
}