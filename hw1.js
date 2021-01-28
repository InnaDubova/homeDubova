const express = require("express");

const expressRouter = require("./expRouter/expressRouter");

const PORT = 5555;
const hw1 = express();



hw1.use(expressRouter);


hw1.listen(PORT,() => console.log(`Server running on port ${PORT}`))