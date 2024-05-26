import mongoose, { Schema }  from "mongoose";


const userSchema=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true,
            lowercase:true,
           },
        email:{
            type:String,
            required:true,
            lowercase:true,
           },
        phoneNumber:{
            type:Number,
            required:true,
            validate: {
                validator: function (v) {
                    return /^\d{10}$/.test(v.toString());
                },
                message: props => `${props.value} is not a valid 10-digit phone number!`
            }
           },
        isGraduate:{
            type:Boolean,
            required:true,
           },   
    },
    {
        timestamps:true
    }
)

export const User=mongoose.model("User",userSchema);