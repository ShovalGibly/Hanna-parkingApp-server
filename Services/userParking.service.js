const mongoose = require('mongoose');
const UserParking = require('../db/schemas/UserParking');

async function createUserParking(details) {
    try{
        console.log("details: ", details);
        return await UserParking.create(details)
    }
    catch(err) {
        console.error(err);
    }

    return false;
}

async function getUserParking(filter = {}) {
    try {
        const userParking = await UserParking.find(filter);
        // console.log('try to find user parking');
        // console.log(userParking);
        return userParking;
    }
    catch(err) {
        console.error(err);
    }
     return false;
}

async function updateUserParking(filter, newDetails) {
    try {
        const updatedUserParking = await UserParking.findOneAndUpdate(filter, newDetails, {new: true}).exec();
        return updatedUserParking;
    }
    catch(err) {
        console.error(err);
    }
     return false;
}

async function deleteUserParking(filter) {
    let deletedUserParking;
    try {
        deletedUserParking = await UserParking.findOneAndDelete(filter).exec();
        if (!deletedUserParking) {
            return false;
        }
        return true;
    }
    catch(err) {
        console.error(err);
    }
    return false;
}

module.exports = { 
    createUserParking,
    getUserParking,
    updateUserParking,
    deleteUserParking,
}