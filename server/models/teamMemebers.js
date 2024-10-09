import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;
