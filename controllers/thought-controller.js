const { Thought } =require('../models');

const thoughtController = {
    getAllUser(req, res) {
        User.find({})
            .then(thoughts => res.json(thoughts))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getThoughtById(){},
    createThought(){},
    updateThought(){},
    deleteThought(){}
}

module.exports = thoughtController;