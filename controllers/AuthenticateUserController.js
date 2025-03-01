import { createSession, checkUserExists } from "../helpers.js";

export function AuthenticateUserController(Req, Res){
    const {body:{user}} = Req

    if (!checkUserExists(user)) {
        return Res.status(400).send("Username does not exist!");
    }
    
    createSession(Req, 'user', user)

    Res.redirect('/publicposts')
}