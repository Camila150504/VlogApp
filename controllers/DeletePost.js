import { loadPosts, savePosts } from "../helpers.js"
import fs from "fs"
export function DeletePostcontroller(Req, Res, Next){
    const {id} = Req.params
    let posts = loadPosts()
    let newPosts = posts.filter(post => post.id != id)

    savePosts(newPosts)
}