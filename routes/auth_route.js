import { Router } from "express";
import express from "express";
import {DisplayPostsController} from "../controllers/DisplayPostsController.js";
import LogoutController from "../controllers/LogoutController.js";
import DisplayPostFormController from "../controllers/DisplayPostFormController.js";
import {CreatePostController} from "../controllers/CreatePostController.js";
import {CreateCommentController} from "../controllers/CreateCommentController.js"
import { DisplayCommentController } from "../controllers/DisplayCommentsController.js";
import { DisplayDraftController } from "../controllers/DisplayDraftsController.js";
import {DeletePost} from "../controllers/DeletePost.js"

const auth_route = express.Router({mergeParams: true})


auth_route.post('/logout', LogoutController)
auth_route.get('/createpost', DisplayPostFormController)
auth_route.post('/createpost', CreatePostController)
auth_route.get('/publicposts', DisplayPostsController)
auth_route.post('/addComment', CreateCommentController)
auth_route.get('/comments', DisplayCommentController)
auth_route.get('/myDrafts', DisplayDraftController)
auth_route.post('/deletePost', DeletePost)

export default auth_route
