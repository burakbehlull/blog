import jwt from 'jsonwebtoken'

function generateAccessToken(data){
    jwt.verify(data, process.env.JWT_KEY, (err, user)=>{
        if(err){
            return {
                success: false,
                message: "Kimlik doğrulanmadı"
            }
        }
        console.log(user)
        const generated = jwt.sign(user, process.env.JWT_KEY, {expiresIn: '1h'})
        return generated
    })
}
function generateRefreshToken(data){
    return jwt.sign(data, process.env.JWT_KEY, {expiresIn: '12h'})
}

function verifyToken(token){
    return jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
        if(err){
            return {message: 'Token geçersiz.'}
        } else {
            return user
        }
    })
}

export {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
}