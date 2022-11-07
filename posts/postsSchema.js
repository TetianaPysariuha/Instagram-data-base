import Joi from 'joi';

export const postSchemaAdd = Joi.object({
    id: Joi.string(),
    userid: Joi.string().required(),
    img: Joi.string().required(),
    title: Joi.string().min(3).max(50),
    description: Joi.string(),
    likes: Joi.array().items(Joi.string()),
    favorite : Joi.array().items(Joi.string()),
    comments: Joi.array().items(Joi.object({userId: Joi.string(), text: Joi.string()})),
    seeCount: Joi.number()
});

export const postSchemaUpdate = Joi.object({
    id: Joi.string(),
    userid: Joi.string(),
    img: Joi.string(),
    title: Joi.string().min(3).max(50),
    description: Joi.string(),
    likes: Joi.array().items(Joi.string()),
    favorite : Joi.array().items(Joi.string()),
    comments: Joi.array().items(Joi.object({userId: Joi.string(), text: Joi.string(), _id: Joi.string()})),
    seeCount: Joi.number()
});
