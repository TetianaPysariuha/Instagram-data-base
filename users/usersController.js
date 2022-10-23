import { 
    getUsersData, 
    postNewUser, 
    updateUserDataById, 
    getUserDataById, 
    deleteUserDataById 
} from "./usersDataLayer.js";
import { getPostsData, deletePostsDataByUserId, getPostsDataByUserId } from '../posts/postsDataLayer.js';

export const getUsers = async (req, res)=>{
    try{
        const users = await getUsersData();
        const posts = await getPostsData();
        if (users) {
            const newUsers = users.map(({_doc: user}) => {
                const filteredPosts = posts.filter(post => post.userid=== user._id.valueOf());
                user.posts = filteredPosts;
                return user;
            }); 
            res.json({status: 'success', data: newUsers});
        } else {
            res.json({status: 'success', data: []});
        }
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const getUserById = async (req, res)=>{
    try{
        const user = await getUserDataById(req.params.id);
        const posts = await getPostsDataByUserId(req.params.id);
        if(user){
            const newUser = user._doc;
            newUser.posts = posts;
            res.json({status: 'success', data: newUser});
        } else {
            res.json({status: 'success', data: []});
        }
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const addNewUser = async (req, res)=>{
    try {
        const data = await postNewUser(req.body);
        res.json({status: 'success', data});
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const editUserById = async (req, res)=>{
    try {
        const data = await updateUserDataById(req.params.id, req.body);
        res.json({status: 'success', data});
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};

export const deleteUserById = async (req, res)=>{
    try {
        if(await getUserDataById(req.params.id)){
            const posts = await getPostsDataByUserId(req.params.id);
            await posts.forEach(el => deletePostsDataByUserId((req.params.id)));
/*             await deletePostsDataByUserId(req.params.id); */
            const data = await deleteUserDataById(req.params.id);
            res.json({status: 'success', data});
        } else {
            res.status(400).json({status: 'error', message: `User with id = ${req.params.id} does not exist`});
        }
    } catch (err) {
        res.status(400).json({status: 'error', message: err.message});
    }
};