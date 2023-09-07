require('dotenv').config()
const mongoose = require('mongoose')

const VSchema = require('./schema.cjs')
const USER = process.env.dbid
const PWD = process.env.dbpwd
const HOST = process.env.dbhost
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongodb://YC:1234@127.0.0.1:27017/d1
// mongoose.set('useFindAndModify',false) // 6.0 이후 자동관리
mongoose.set('strictQuery', false) // 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
module.exports = VSchema
