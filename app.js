//! Bağımlılıklar

const path = require('path')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const flash = require('express-flash')
require('dotenv').config();


//! Veritabanı
require('./src/config/db')

//! Sistem başlatma
const app = express()


//! Statik Dosya Okuma
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'src', 'views'))
app.use('public',express.static(path.join(__dirname,'public')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))


//! Express Json Okuması İçin
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//! Anasayfa Router
app.get('/', async (req,res)=>{
    res.render('index.ejs')
})


app.listen(process.env.PORT, ()=>{
    console.log(`Sunucu bu porttan ayağa kalktı! ${process.env.PORT}`);
    
})