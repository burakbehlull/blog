import User from '../models/User.js'
import {generateAccessToken, generateRefreshToken,verifyAccessToken} from '../helpers/sessions.js'
async function register(req,res){
    const {displayName, username, email, password} = req.body
    const user = await User.findOne({email: email})
    const username_control = await User.findOne({username: username})
    if(user || username_control){
        res.json({
            message: 'Bu kullanıcı zaten var.'
        })
    } else {
        await User.create({
            displayName: displayName,
            username: username,
            email: email,
            password: password,
            token: generateRefreshToken({ email: email })
        })
        res.json({
            message: 'Kullanıcı başarıyla oluşturuldu.'
        })
    }
}

async function login(req,res){
    const {email, password} = req.body
    try {
        const user = await User.findOne({email: email})
        if(user == undefined || user == null) {
            res.json({
                success: false,
                message: 'Kullanıcı mevcut değil',
            })
        }
        if(user.password == password){
            const isToken = await verifyAccessToken(user)
            res.json({
                success: true,
                username: user?.username,
                accessToken: isToken, 
            })
        } else {
            res.json({
                success: false,
                message: "Şifre yanlış"
            })
        }
    } catch (err) {
        return {
            success: false,
            message: "Hata",
            error: err
        }
       
    }
}

function GoogleRedirect(){
    return ''
}

export {
    register, login, 
    GoogleRedirect
}