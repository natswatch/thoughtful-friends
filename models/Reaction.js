const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId
        },
        reactionBody: {
            type: String,
            required: 'You must include a reaction!',
            maxlength: [280]
        },
        username: {
            type: String,
            required: 'You must enter a username!'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;