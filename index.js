const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;

const app = express();

app.listen(PORT, async () => {
console.log(`server up on port ${PORT}`);
});


console.log(process.env.MONGODB_URL)
mongoose
.connect("mongodb+srv://developerzone91:NiimA1960@cluster0.ojxlelc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
const dotenv = require("dotenv");

dotenv.config();
