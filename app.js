import express from 'express';
import usersRouter from './users/usersRouter.js';
import postsRouter from './posts/postsRouter.js';
import cors from 'cors';
/* import { postNewUser } from './users/usersDataLayer.js'; */
import { resolve } from 'path';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use(express.static(resolve('static')))

/* app.get('/users', (req, res)=>{
    console.log(req.body);
    res.json({status: 'success'})
}) */


/* const users = [
    {
        avatar: './static/users/1348369701-170667a.jpg',
        nik: 'Milda',
        name: 'Angela Brown',
        followBy : [],
    },
    {
        avatar: './img/users/1351141161-170667a.jpg',
        nik: 'Jammy',
        name: 'James White',
        followBy : [],
    },
    {
        avatar: './img/users/1356420393-170667a.jpg',
        nik: 'Kevin',
        name: 'Kevin Green',
        followBy : [],
    },
    {
        avatar: './img/users/1357759108-170667a.jpg',
        nik: 'Ann',
        name: 'Anna Milevski',
        followBy : [],
    },
    {
        avatar: './img/users/1364105164-170667a.jpg',
        nik: 'Melony',
        name: 'Melony Red',
        followBy : [],
    },
    {
        avatar: './img/users/1369419005-170667a.jpg',
        nik: 'LittleMouse',
        name: 'Ginny Little',
        followBy : [],
    },
    {
        avatar: './img/users/1369826066-170667a.jpg',
        nik: 'Kenny',
        name: 'Kenny Depp',
        followBy : [],
    },
    {
        avatar: './img/users/1372668264-170667a.jpg',
        nik: 'Zuza',
        name: 'Zuzanna Yellow',
        followBy : [],
    },
    {
        avatar: './img/users/1382274951-170667a.jpg',
        nik: 'Sony',
        name: 'Tom Darck',
        followBy : [],
    },
    {
        avatar: './img/users/1387828269-170667a.jpg',
        nik: 'Mikki',
        name: 'Mikaella Blue',
        followBy : [],
    }
]

users.forEach( async (element) => {
    console.log(element)
    await postNewUser(element);
}); */
export default app;