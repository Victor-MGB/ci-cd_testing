const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req,res)=>{
    res.send("Hello World! i am learning learning CICD using GITHUB Action")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}