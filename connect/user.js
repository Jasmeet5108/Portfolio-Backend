import mongoose from "mongoose"

const connectToMongo = async (url) => {
    await mongoose.connect(url);
}

export default connectToMongo;