import User from "../models/user.model.js";
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

    const newUser = await User.create({
      fullName,
      email,
      password,
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

export const LoginUser = (req, res) => {
  res.json({ message: "Login successful from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successful from controller" });
};
