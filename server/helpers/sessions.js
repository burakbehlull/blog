import jwt from 'jsonwebtoken'

function generateAccessToken(data){
    jwt.verify(data, process.env.JWT_KEY, (err, user)=>{
        if(err){

            return false
        }
            
        return jwt.sign(data, process.env.JWT_KEY, {expiresIn: '1h'})
    })
}
function generateRefreshToken(data){
    return jwt.sign(data, process.env.JWT_KEY, {expiresIn: '12h'})
}

function verifyToken(token){
    return jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
        if(err){
            return {message: 'Token geçersiz.'}
        }
        return user
    })
}

export {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
}