import User from "../models/user.model.js";
import bcrypt from "bcrypt";


export const RegisterUser = async (req, res, next) => {
  try {

    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields  Regqired");
      error.statusCode = 400;

      return next(error);
    }


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("All fields  Regqired");
      error.statusCode = 409;

      return next(error);
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const SALT = await bcrypt.genSalt(10);


    const hashedPassword = await bcrypt.hash(password, SALT);


    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({
      message: "USer created successfully",
    });
  } catch (error) {


    console.log(error.message);
    next();

  }
};

export const LoginUser = async (req, res, next) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const err = new Error("All fields are required");
      err.statusCode = 400;
      return next(err);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const err = new Error("User Not Found");
      err.statusCode = 404;
      return next(err);
    }

    const isVarified = await bcrypt.compare(password,existingUser.password)
    if (!isVarified) {
      const err = new Error("Invalid Password");
      err.statusCode = 401;
      return next(err);
    }

    res.status(200).json({
      message: "Welcome Back!",
      data: existingUser
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }

};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successful from controller" });
};
