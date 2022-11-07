import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    avatar: {
        type: String,
        required: true
    },
    nik: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    followBy: [String],
});

const Users = mongoose.model('users', userSchema);

export const getUsersData = async () => {
    const data = await Users.find({});
    return data;
};

export const getUserDataById = async (id) => {
    const data = await Users.findById(id);
    return data;
}

export const postNewUser = async (data) => {
    const newUser = await new Users(data).save();
    return newUser;
}

export const updateUserDataById = async (id, data) => {
    await Users.findByIdAndUpdate(id, data);
    const newData = await Users.find({});
    return newData;
}

export const deleteUserDataById = async (id) => {
    await Users.findByIdAndDelete(id);
    const newData = await Users.find({});
    return newData;
}