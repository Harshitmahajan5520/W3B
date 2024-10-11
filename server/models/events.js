import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    description: String,
    imageUrl: String,
  });
  
  const Event = mongoose.model('Event', eventSchema);

  export default Event;
