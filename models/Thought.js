const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You must enter a thought!',
            minlength: [1],
            maxlength: [280]
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: 'You must enter a username!'
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reactionSchema'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);