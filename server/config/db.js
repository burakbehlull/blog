import mongoose from 'mongoose'

export default function db(){
    const dbconn = mongoose.connect(process.env.MONGODB_URL).then(()=> {
        console.log('Veritabanına bağlandı.')
    }).catch((err)=>{
        console.log("Veritabanı hatası: ", err)
    })
    return dbconn
}