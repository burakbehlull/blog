import User from '../models/User.js'
import {generateAccessToken, generateRefreshToken} from '../helpers/sessions.js'
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
            token: generateRefreshToken({ username: username, email: email, password: password})
        })
        res.json({
            message: 'Kullanıcı başarıyla oluşturuldu.'
        })
    }
}

async function login(req,res){
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    try {
        const generate = generateAccessToken({
            username: user.username,
            email: user.email,
            password: user.password
        })
        if(user.password == password){
            
            res.json({
                success: true,
                accessToken: generate | null, 
            })
        } else {
            res.json({
                success: false
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