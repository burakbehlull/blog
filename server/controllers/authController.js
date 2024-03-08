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
        console.log("model user", user)
        if(user == null){

        }
        if(user.password == password){
            const isToken = await verifyAccessToken(user)
            console.log('Verify acess isToken', isToken)
            res.json({
                success: true,
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
            message: "Böyle bir kullanıcı yok",
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