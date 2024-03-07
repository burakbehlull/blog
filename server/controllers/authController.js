import User from '../models/User.js'
import {generateAccessToken, generateRefreshToken,verifyAccessToken} from '../helpers/sessions.js'
async function register(req,res){
    
    const {displayName, username, email, password} = req.body
    const user = await User.findOne({email: email})
    if(user){
        res.json({
            message: 'Bu kullanıcı zaten var.'
        })
    } else {
        await User.create({
            displayName: displayName,
            username: username,
            email: email,
            password: password,
            token: generateRefreshToken({ username: username, email: email })
        })
        res.json({
            message: 'Kullanıcı başarıyla oluşturuldu.'
        })
    }
}

async function login(req,res){
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: email})
        console.log("USER TOKEN: ", user.token)
        const accessToken = verifyAccessToken(user.token)
        console.log("access: ", accessToken)
        if(user.password == password){
            res.json({
                success: true,
                accessToken: accessToken, 
            })
        } else {
            res.json({
                success: false,
                message: "Şifre yanlış"
            })
        }
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
}

function GoogleRedirect(){
    return ''
}

export {
    register, login, 
    GoogleRedirect
}