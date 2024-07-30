import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    clerkId: String,
    wishlist: {
        type: Array,
        default: [],
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;