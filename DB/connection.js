const mongoose = require("mongoose")

mongoose.connect(process.env.CONNECTION_STRING).then(
    result => {
        console.log("Mongodb atlas connected with mtServer");
    }
).catch(err => {
    console.log("Connection failed");
    console.log(err);
})
