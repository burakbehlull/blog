import {sign} from 'jsonwebtoken'

function generateAccessToken(data){
    return sign(data, process.env.TOKEN_SECRET, {expiresIn: '7d'})
}
function generateRefreshToken(data){
    return sign(data, process.env.TOKEN_SECRET, {expiresIn: '15m'})
}