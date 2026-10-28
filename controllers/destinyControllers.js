import Destination from "../models/Destination.js";


// distinct method

// CountDocuments

// sort method

// limit method


export const showDestinationById = async (req, res) => {
    const destination = await Destination.findById(req.params.id);
    res.status(200).json(destination);
}

export const createDestination = async (req, res) => {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
}

//findByIdAndUpdate


// findOneAndUpdate
export const updateDestination = async (req, res) => {
    const destination = await Destination.findOneAndUpdate(
        {
            name : req.params.id
        },
        {
            $set: req.body
        },
        {
            new: true
        }
    )
    res.status(200).json(destination);
}

// findByIdAndDelete


// findOneAndDelete
