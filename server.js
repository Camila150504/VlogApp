import express from 'express';
import {engine} from "express-handlebars"
import process from 'process';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session'
import { getRoutes } from './helpers.js';
import Handlebars from 'handlebars';


const PORT = process.env.PORT || 3000
const COOKIE_SECRET = process.env.COOKIE_SECRET
const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(expressSession({
    secret: COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        signed: true,
        maxAge: 600000
    }
}))

server.engine('handlebars', engine())

server.set('view engine', 'handlebars')
server.set('views', './views')

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  });

server.use(getRoutes)

server.listen(PORT, ()=> console.log(`Server listen to PORT ${PORT}`))