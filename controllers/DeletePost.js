import { loadPosts, savePosts, checkIfSigned} from "../helpers.js"
import fs from "fs"
export function DeletePost(Req, Res, Next){
    const {id} = Req.params
    console.log(id)
    const loggedUser = checkIfSigned(Req)
    let posts = loadPosts()
    let currentPost = posts.find(post => post.id == id)
    let newPosts = posts.filter(post => post.id != id)
    
    if(!loggedUser){
        return Res.redirect('/login')
    }
    if(currentPost.user != loggedUser){
        return Res.send('You are not allowed to delete')
    }


    savePosts(newPosts)
    Res.redirect('/publicposts')
}