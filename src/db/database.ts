import mongoose from "mongoose";

const MONGO_URI = 'mongodb+srv://aldebaran:1aldebaran2@cluster0.iv9vaye.mongodb.net/music?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
const connect = async () => {
    await mongoose.connect(MONGO_URI)
        .then(()=> console.log('connect to database'))
        .catch((error)=> console.error(error.message))
}

export default connect