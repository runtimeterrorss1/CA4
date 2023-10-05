const express = require("express");
const cors = require('cors')
const app = express();

const userRoute = require("./Routes/user.route")


app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute)

app.listen(4000, () =>{
    console.log("Server listening on port 4000");
})