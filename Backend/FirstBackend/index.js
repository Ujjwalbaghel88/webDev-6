import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";

import connectDB from "./src/config/dbConnection.config.js";
const app = express();
app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

//Default APi

app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first Backend forever Project" });
});

// app.post("/login", (req, res) => {
//   res.json({ message: "login Sucessful" });
// });

// app.get("/logout", (req, res) => {
//   res.json({ message: "logout Sucessful" });
// });

// app.post("/register", (req, res) => {
//   res.json({ message: "register Sucessful" });
// });

// app.put("/update", (req, res) => {
//   res.json({ message: "update Sucessful" });
// });

// app.delete("/delete", (req, res) => {
//   res.json({ message: "delete Sucessful" });
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started on port:", port);
  connectDB();
});
