import { Router } from "express";
import express from "express"; 
import { DisplayLoginController } from "../controllers/DisplayLoginController.js";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController.js";
import { DisplaySignupController } from "../controllers/DisplaySignupController.js";
import { SignUpController } from "../controllers/SignUpController.js"
import { DisplayPostsController } from "../controllers/DisplayPostsController.js";
import { DisplayCommentController } from "../controllers/DisplayCommentsController.js";
import { DisplayDraftController } from "../controllers/DisplayDraftsController.js";
import { DeletePost } from "../controllers/DeletePost.js";

const guest_route = express.Router({mergeParams: true});
guest_route.get('/publicposts', DisplayPostsController)
guest_route.get('/register', DisplaySignupController)
guest_route.post('/register', SignUpController)
guest_route.get('/login', DisplayLoginController)
guest_route.post('/login', AuthenticateUserController)
guest_route.get('/comments', DisplayCommentController)
guest_route.get('/myDrafts', DisplayDraftController)
guest_route.post('/deletePost', DeletePost)

export default guest_route