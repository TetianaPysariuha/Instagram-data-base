import { 
    getPostsData, 
    getPostDataById, 
    getPostsDataByUserId, 
    postNewPost, 
    updatePostDataById, 
    deletePostDataById 
} from "./postsDataLayer.js";
import { getUsersData, getUserDataById } from "../users/usersDataLayer.js";

export const getPosts = async (req, res)=>{
    try{
        const posts = await getPostsData();
        const users = await getUsersData();
        if (posts) {
            const newPosts = posts.map(({_doc: post}) => {
                const filteredUser = users.filter(user => user._id.valueOf()=== post.userid);
                post.user = filteredUser[0];
                return post;
            }); 
            res.json({status: 'success', data: newPosts});
        } else {
            res.json({status: 'success', data: []});
        }
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const getPostById = async (req, res)=>{
    try {
        const post = await getPostDataById(req.params.id);
        const user = await getUserDataById(post._doc.userid);
        if (post) {
            const newPost = post._doc;
            newPost.user = user._doc;
            res.json({status: 'success', data: newPost});
        }
        res.json({status: 'success', data: []});
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const getPostsByUserId = async (req, res)=>{
    try {
        const posts = await getPostsDataByUserId(req.params.id);
        const user = await getUserDataById(req.params.id);
        if (posts) {
            const newPosts = posts.map(({_doc: post}) => {
                post.user = user._doc;;
                return post;
            }); 
            res.json({status: 'success', data: posts});
        } else {
            res.json({status: 'success', data: []});
        }
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const addNewPost = async (req, res)=>{
    try{
        const user = await getUserDataById(req.body.userid);
        if (user){
            const data = await postNewPost(req.body);
            res.json({status: 'success', data});
        } else {
            res.status(400).json({status: 'error', message: `User with id = ${req.body.userid} does not exist`});
        }
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const editPostById = async (req, res)=>{
    try {
        const data = await updatePostDataById(req.params.id, req.body);
        res.json({status: 'success', data});
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const deletePostById = async (req, res)=>{
    try{
        const data = await deletePostDataById(req.params.id);
        res.json({status: 'success', data});
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};