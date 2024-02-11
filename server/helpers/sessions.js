import jwt from 'jsonwebtoken'

function generateAccessToken(data){
    return jwt.sign(data, process.env.JWT_KEY, {expiresIn: '1h'})
}
function generateRefreshToken(data){
    return jwt.sign(data, process.env.JWT_KEY, {expiresIn: '12h'})
}

export {
    generateAccessToken,
    generateRefreshToken
}