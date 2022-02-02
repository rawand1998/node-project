const connection  =require('../connection')
const signIn = (email)=>{
    const sql = {
        text:'select * from users where email=$1',
        VALUES=[email]
    }
    return connection.query(sql)
}
module.exports= signIn