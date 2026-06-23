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

    //create New User And Complere registration will do this tomorrow
  } catch (error) {}
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login successful from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successful from controller" });
};
