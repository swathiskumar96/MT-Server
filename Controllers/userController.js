const users = require("./Models/userModel");

//register
exports.register = async (req, res) => {
    console.log("Inside register request");
    const { name, address, mobile, email, gender, dob, course } = req.body
    console.log(name, address, mobile, email, gender, dob, course);
    try {
        const newUser = new users({
            name, address, mobile, email, gender, dob, course
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(401).json(err)

    }
}


exports.getUserInputs = async (req, res) => {
    try {
        const userInputs = await users.find()
        res.status(200).json(userInputs)
    } catch (err) {
        res.status(401).json(err)
    }
}