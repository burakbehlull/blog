import User from '../models/User.js'
import {generateRefreshToken} from '../helpers/sessions.js'
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

function login(){

    return ''
}

function GoogleRedirect(){
    return ''
}

export {
    register, login, 
    GoogleRedirect
}