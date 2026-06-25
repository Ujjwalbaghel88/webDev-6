import User from "../models/user.model";
export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All field required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email ALready Registered" });
      return;
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoUrl,
      public_id: null,
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
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login successful from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successful from controller" });
};
