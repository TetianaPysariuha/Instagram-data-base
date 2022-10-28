import Joi from 'joi';

export const userSchemaAdd = Joi.object({
    id: Joi.string(),
    avatar: Joi.string().required(),
    nik: Joi.string().min(3).max(20).required(),
    name: Joi.string().min(3).max(30).required(),
    followBy : Joi.array().items(Joi.string()).default([])
});

export const userSchemaUpdate = Joi.object({
    id: Joi.string(),
    avatar: Joi.string(),
    nik: Joi.string().min(3).max(20),
    name: Joi.string().min(3).max(30),
    followBy : Joi.array().items(Joi.string()),
});