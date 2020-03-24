const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");

connectDB();
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const userRouter = require("./router/userRoute");
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
