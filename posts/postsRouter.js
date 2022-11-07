import { Router } from "express";
import { getPosts, getPostById, getPostsByUserId, addNewPost, editPostById, deletePostById, getPostsStrictQuantity, getFavoritePostsByUserId } from './postsController.js';
import joiValidator from 'express-joi-validation';
import { postSchemaAdd, postSchemaUpdate } from './postsSchema.js';


const validator = joiValidator.createValidator();
const postsRouter = Router();

postsRouter.get('', getPosts);
postsRouter.get('/:id', getPostById);
postsRouter.get('/user/:id', getPostsByUserId);
postsRouter.get('/favorite/:userId', getFavoritePostsByUserId);
postsRouter.get('/quantity/:start&:end&:userId', getPostsStrictQuantity);
postsRouter.get('/quantity/:start&:end', getPostsStrictQuantity);
postsRouter.post('', validator.body(postSchemaAdd), addNewPost);
postsRouter.put('/:id', validator.body(postSchemaUpdate), editPostById);
postsRouter.delete('/:id', deletePostById);

export default postsRouter;