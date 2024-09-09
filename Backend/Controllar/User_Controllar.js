const User = require("../Model/User_Modal");
const bcryptjs=require('bcryptjs')

const signup = async(req, res) => {
  try {
    const {fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User allready exists" });
    }
    const haspassword= await bcryptjs.hash(password,10)
    const createdUser =  new User({
      fullname:fullname,
      email:email,
      password:haspassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully",user:{
      _id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email,
    } });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
  
      // Check if user exists
      if (!user) {
        return res.status(400).json({ message: "Invalid username or password" });
      }
  
      // Compare provided password with the stored hashed password
      const isMatch = await bcryptjs.compare(password, user.password);
  
      // If password does not match
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid username or password" });
      }
  
      // If everything is fine, return success response
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
  
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

module.exports={
    signup,
    login,
}
