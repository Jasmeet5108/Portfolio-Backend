import User from "../models/user.js"

// Get all users from the Database
const handleGetReq = async (req, res) => {
    const db_users = await User.find({});
    return res.json(db_users);
}

// Post data to the Database
const handlePostReq = async (req, res) => {
    const body = await req.body;

    if (!body || !body.name || !body.email || !body.message) {
        return res.json({ err: "Fill all fields" });
    }

    const formData = await User.create({
        name: body.name,
        email: body.email,
        message: body.message
    })

    console.log(formData);

}

export default { handleGetReq, handlePostReq };