import { checkIfSigned, loadPosts, savePosts} from "../helpers.js"
export function CreatePostController(Req, Res, Next){
    const {title, content, status} = Req.body
    const user = checkIfSigned(Req)
    let posts = loadPosts()

    if(!user){
        return Res.redirect('/login')
    }
    const lastId = posts.length > 0 ? posts[posts.length - 1].id : 0;
    const newPost ={
        id: lastId + 1,
        user,
        title, 
        content, 
        status
    }
    
    
    posts.push(newPost)
    savePosts(posts)

    Res.redirect('/publicposts')
}