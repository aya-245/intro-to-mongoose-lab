const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 100
    },
    instructions: {
        type: String
    },
    prepTime: {
        type: Number,
        min: 5,
        max: 500, 
        require: true
    }, 
    difficulty: {
        type: String, 
        enum: ['Easy', 'Medium', 'Hard']
    }
},{timestamps:true})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe