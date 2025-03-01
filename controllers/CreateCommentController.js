import { checkIfSigned, loadComments, saveComments } from "../helpers.js";

export function CreateCommentController(Req, Res, Next) {
    const { postId, comment } = Req.body;
    const user = checkIfSigned(Req);

    if (!user) {
        return Res.redirect('/login');
    }

    let comments = loadComments();
    const lastId = comments.length > 0 ? comments[comments.length - 1].id : 0;

    const newComment = {
        id: lastId + 1,
        postId: Number(postId),
        user,
        comment
    };

    comments.push(newComment);
    saveComments(comments);

    Res.redirect(`/comments?postId=${postId}`);
}
