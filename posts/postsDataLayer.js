import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    likes : [String],
    favorite: [String],
    comments: [{userId: String, text: String}],
    seeCount: Number
});

const Posts = mongoose.model('posts', postSchema);


export const getPostsData = async () => {
    const data = await Posts.find({ });
    return data;
};

export const getPostDataById = async (id) => {
    const data = await Posts.findById(id);
    return data;
}

export const getPostsDataByUserId = async (id) => {
    const data = await Posts.find({userid: id}).exec();
    return data;
}

export const postNewPost = async (data) => {
    const newPost = await new Posts(data).save();
    return newPost;
}

export const updatePostDataById = async (id, data) => {
    await Posts.findByIdAndUpdate(id, data);
    const newData = await Posts.find({ });
    return newData;
}

export const deletePostDataById = async (id) => {
    await Posts.findByIdAndDelete(id);
    const newData = await Posts.find({ });
    return newData;
}

export const deletePostsDataByUserId = async (id) => {
    await Posts.findOneAndDelete({userid: id});
    const newData = await Posts.find({ });
    return newData;
}