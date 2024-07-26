import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    user:{
      type: mongoose.Types.ObjectId,
      ref:'User',
      required: true
    }
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);

export default Task