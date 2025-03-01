import { loadComments, checkIfSigned } from "../helpers.js"

export function DisplayCommentController(Req, Res, Next){
    const postId = Number(Req.query.postId)
    const comments = loadComments()
    const filteredComments = comments.filter(comment => comment.postId === postId)
    Res.render('comments', {comments: filteredComments})
}