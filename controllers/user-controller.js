const { User } =require('../models');

const userController = {
    getAllUser(req, res) {
        User.find({})
            .then(users => res.json(users))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getUserById(){},
    createUser(){},
    updateUser(){},
    deleteUser(){}
}

module.exports = userController;