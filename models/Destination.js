import mongoose from "mongoose"

const destinationSchema = new mongoose.Schema({
    name: String,
    state: String,
    distance: Number,
    rating: Number
})

// Destination Model

export default Destination;
