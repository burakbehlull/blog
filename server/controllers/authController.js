import User from '../models/User.js'
import {generateAccessToken, generateRefreshToken,verifyAccessToken, verifyToken} from '../helpers/sessions.js'
async function register(req,res){
    const {displayName, username, email, password} = req.body
    const user = await User.findOne({$or: [{email: email}, {username: username}]})
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

async function userVerify(req,res){
    const { token } = req.body
    try {
        if(!token) res.sendStatus(200).json({
            success: true,
            message: 'Token boş'
        })

        const verify = await verifyToken(token)
        return res.json({
            success: true,
            message: 'İşlem başarılı',
            verify: verify
        })
    } catch (err) {
        console.log(err)
    }
}

function GoogleRedirect(){
    return ''
}

export {
    register, login, 
    GoogleRedirect,

    userVerify
}