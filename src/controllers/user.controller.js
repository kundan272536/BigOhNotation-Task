import { User } from "../model/user.model.js";
const userRegister=async(req,res)=>{
    try {
        const {title,name,email,phonenumber,isGraduate}=req.body;
        if ([title, name, email, phonenumber, isGraduate].some(field => !field || field.toString().trim() === "")) {
            return res.status(400).send({ status: 400, message: "All fields are required" });
        }
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (!emailRegex.test(email)) {
               return res.status(400).send({ status: 400, message: "Invalid email format" });
           }
        console.log("After email type checked");
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phonenumber)) {
            return res.status(400).send({ status: 400, message: "Phonenumber must be exactly 10 digits long" });
        }
        const emailCheck=await User.find({email:email});
        console.log("emailchecking",emailCheck.length);
        if(emailCheck.length===1){
            return res.status(500).send({ status: 500, message: "User`s email is already exist in database!" });

        }
           if (typeof isGraduate !== "boolean") {
               return res.status(400).send({ status: 400, message: "isGraduate must be a boolean" });
           }
           console.log("After the qualification checked");
        const user=await User.create({
            title,
            name, 
            email, 
            phoneNumber:phonenumber, 
            isGraduate
        })
        console.log("User Detais",user);
        const createdUser=await User.findById(user._id);
        if(!createdUser){
            return res.send({status:500,message:"Something went wrong during user registration"})
        }
        return res.send({status:200,message:"User registered Successfully",data:createdUser});
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error",data:error });
    }

}


// Route to handle GET request for user details
const userDetails=async(req,res)=>{
    try {
        console.log("inside the userDetails");
        const { form_title } = req.query;
        console.log("Form title",form_title);
        const users=await User.find({title:form_title})
        console.log("users details:",users);
        if(users.length===0){
            return res.status(404).send({ status: 404, message: "User not found" });

        }
        return res.send({ status: 200,message:"Details fetched successfuly", data: [users] });

    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}


export {userRegister,userDetails}