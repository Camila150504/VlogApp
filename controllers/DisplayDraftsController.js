import { checkIfSigned, loadPosts } from "../helpers.js"
export function DisplayDraftController(Req, Res, Next){
    const posts = loadPosts()
    const signedUser = checkIfSigned(Req)
    if(!signedUser){
        return Res.render('login')
    }
    const draftPosts = posts.filter(post => post.status === 'draft')
    const filteredPosts = draftPosts.filter(post => post.user === signedUser)

    Res.render('drafts', {posts:filteredPosts})
}