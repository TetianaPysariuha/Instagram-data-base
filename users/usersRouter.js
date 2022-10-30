import { Router } from "express";
import { getUsers, getUserById, addNewUser, editUserById, deleteUserById } from './usersController.js';
import joiValidator from 'express-joi-validation';
import {userSchemaAdd, userSchemaUpdate} from './usersSchema.js';

const validator = joiValidator.createValidator();
const usersRouter = Router();

usersRouter.get('', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('', validator.body(userSchemaAdd), addNewUser);
usersRouter.put('/:id', validator.body(userSchemaUpdate), editUserById);
usersRouter.delete('/:id', deleteUserById);

export default usersRouter;