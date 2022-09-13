const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please add a title ']
    },
    content: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})


module.exports = mongoose.model("Project", projectSchema)