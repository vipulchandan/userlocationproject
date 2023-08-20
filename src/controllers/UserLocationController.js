const UserLocationModel = require('../models/UserLocationModel');

const createData = async (req, res) => {
    try {
        const { name, latitude, longitude } = req.body;

        // Name Validation
        if (!name) {
            return res.status(400).json({
                status: false,
                message: 'Name is required'
            });
        }

        const username = await UserLocationModel.findOne({ name })
        if (username) {
            return res.status(400).json({
                status: false,
                message: 'Location already exists'
            });
        }

        // Latitude Validation
        if (!latitude) {
            return res.status(400).json({
                status: false,
                message: 'Latitude is required'
            });
        }

        const userLatitudeLocation = await UserLocationModel.findOne({ latitude })
        if (userLatitudeLocation) {
            return res.status(400).json({
                status: false,
                message: 'Location already exists'
            });
        }

        // Longitude Validation
        if (!longitude) {
            return res.status(400).json({
                status: false,
                message: 'Longitude is required'
            });
        }

        const userLongitudeLocation = await UserLocationModel.findOne({ longitude });
        if (userLongitudeLocation) {
            return res.status(400).json({
                status: false,
                message: 'Location already exists'
            });
        }
        
        const newUserLocation = await UserLocationModel.create({
            name,
            latitude,
            longitude
        });

        res.status(201).json({
            status: true,
            message: 'Location created successfully',
            data: newUserLocation
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, latitude, longitude } = req.body;

        const userLocation = await UserLocationModel.findOne({ _id: id });
        if (!userLocation) {
            return res.status(404).json({
                status: false,
                message: 'User Location not found'
            });
        }

        if (name) {
            userLocation.name = name || userLocation.name
        }

        const userLatitudeLocation = await UserLocationModel.findOne({ latitude })
        if (userLatitudeLocation) {
            return res.status(400).json({
                status: false,
                message: 'Location already exists with this latitude'
            });
        }

        const userLongitudeLocation = await UserLocationModel.findOne({ longitude });
        if (userLongitudeLocation) {
            return res.status(400).json({
                status: false,
                message: 'Location already exists with this longitude'
            });
        }

        if (!id) {
            return res.status(400).json({
                status: false,
                message: 'Id is required'
            });
        }

        const updatedUserLocation = await UserLocationModel.findByIdAndUpdate(
            id,
            { name, latitude, longitude },
            { new: true }
        )

        if (!updatedUserLocation) {
            return res.status(404).json({
                status: false,
                message: 'User Location not found'
            });
        }

        res.status(200).json({
            status: true,
            message: 'User Location updated successfully',
            data: updatedUserLocation
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

const getUsers = async (req, res) => {
    try {
        const { N } = req.params;

        const users = await UserLocationModel.find({
            excluded: false 
        }).sort({
            latitude: 1,
            longitude: 1
        }).limit(parseInt(N, 10));

        res.status(200).json({
            status: true,
            data: users
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
}

module.exports = {
    createData,
    updateData,
    getUsers
}