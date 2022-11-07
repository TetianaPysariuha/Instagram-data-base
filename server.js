import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3001;
const DB_URL = 'mongodb+srv://Admin:StepInstagram@cluster0.yxexamv.mongodb.net/instagram?retryWrites=true&w=majority'

mongoose.connect(DB_URL, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log('--------------------------------------------------')
        console.log(`Connection to DB is done`);
        console.log('--------------------------------------------------')
    }
})

app.listen(PORT, () => {
    console.log('--------------------------------------------------')
    console.log(`Server start to listen on http://localhost:${PORT}`);
    console.log('--------------------------------------------------')
});