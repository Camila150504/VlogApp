import { addUser, checkUserExists } from "../helpers.js";
export function SignUpController(Req, Res, Next){
    const { body: { username } } = Req;

    if (checkUserExists(username)) {
        return Res.status(400).send("Username already exists!");
    }

    addUser(username);
    Res.redirect("/login");
}