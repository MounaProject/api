require('dotenv').config()


module.exports = {
    secret: process.env.SECRET_KEY,
    database:'mongodb+srv://admin:root@numeriquueschool.uz3pn.mongodb.net/mouna'
}