import { loadPosts, checkIfSigned } from "../helpers.js"


export function DisplayPostsController(Req, Res, Next){
    const posts = loadPosts()
    const publishedPosts = posts.filter(post => post.status === 'published')

    const loggedUser = checkIfSigned(Req)

    console.log(loggedUser)
    console.log(publishedPosts)

    Res.render('publicposts', {posts: publishedPosts, loggedUser})
}