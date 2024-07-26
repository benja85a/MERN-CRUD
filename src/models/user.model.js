import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true//limpiar columna si lleva espacios
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true//mail unico 
    },
    password:{
        type:String,
        require:true,
    }
}, {
    timestamps: true
})
export default mongoose.model('User', userSchema)