import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
 
const createToken = (id) => {
   return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {

   res.json({msg:"Login Api working"})
}

// Route for user register
const registerUser = async (req, res) => {
     try {
      
       const { name, email, password } = req.body

       // checking for user already exists or not
       const exists = await userModel.findOne({email});
         if (exists) {
            return res.json({success: false, message: "user already exists"})
         }

         // validating email formate & strong password
         if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
         }
         if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
         }

         // hashing your password
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt)

         const newUser = new userModel({
            name,
            email,
            password:hashedPassword
         })

         const user = await newUser.save()

         const token = createToken(user._id)

         res.json({success: true, token})



     } catch (error) {
      console.log(error);
      res.json({success:false, message:error.message})
     }


}

// Route for admin login 
const adminLogin = async (req, res) => {

// start from 5:56:20
}

export {loginUser, registerUser, adminLogin }