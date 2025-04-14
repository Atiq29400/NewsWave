const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/newswave")

app.post("/createUser", async (req, res) => {
    try {
        // Check if a user with the same email already exists
        const existingUser = await UserModel.findOne({ email: req.body.email });

        if (existingUser) {
            // If user with the same email exists, send a response indicating duplication
            return res.status(409).json({ error: "User with this email already exists" });
        }

        // If no user with the same email, create a new user
        const newUser = await UserModel.create(req.body);
        return res.status(201).json(newUser);
    } catch (err) {
        // Handle errors and send an appropriate response
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/loginuser", async (req, res) => {
    try {
        // Check if a user with the same email already exists
        const existingUser = await UserModel.findOne({ email: req.body.email, password: req.body.password });

        if (existingUser) {
            return res.status(201).json("User exists");
            // return res.status(409).json({ error: "User with this email already exists" });
        }

        return res.status(409).json({ error: "User not exists" });
        // If no user with the same email, create a new user
        // const newUser = await UserModel.create(req.body);
        // return res.status(201).json(newUser);
    } catch (err) {
        // Handle errors and send an appropriate response
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3001, () => {
    console.log("Server is Running")
})