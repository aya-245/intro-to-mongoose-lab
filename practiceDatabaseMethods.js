const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectToDatabase = require('./db')
const Recipe = require('./models/Recipe')


// connect to the DB
connectToDatabase()

async function createRecipe(newRecipe){
    try{
    const newRecipe = await Recipe.create({
        name: "Um Ali",
        instructions: "bake at 180C",
        prepTime: 120,
        difficulty: "Medium"
    })
    console.log(newRecipe)
    }
    catch(err){
        console.log("ERROR: " + err)
    }
}

createRecipe()

async function getAllRecipes(){
    try{
    const allRecipes = await Recipe.find()
    for(const oneRecipe of allRecipes){
        console.log(oneRecipe.name + " is an " + oneRecipe.difficulty + " recipe and takes " + oneRecipe.prepTime + " minutes")
    }
    }
    catch(err){
        console.log("ERROR: " + err)
    }
}

 getAllRecipes()

async function getOneRecipeByItsID(){
    try{
    const foundRecipe = await Recipe.findById('6adf3f4d2447994d58ddb8a8')
    if(foundRecipe === null)
    {
        console.log("No recipe with this ID exists.")
    }
    else{
        console.log(foundRecipe)
    }
    }
    catch(err){
        console.log("ERROR: " + err)
    }
}
getOneRecipeByItsID()

async function updateRecipeByItsID(){
    try{
    const updatedRecipe = await Recipe.findByIdAndUpdate('6adf3f4d2447994d58ddb8a8', {prepTime: 200}, {new: true})
    console.log(updatedRecipe)
    }
    catch(err){
        consol.log("ERROR: " + err)
    }
}
updateRecipeByItsID()

async function deletOneRecipeByItsID(){
    try{
    const deletedRecipe = await Recipe.findByIdAndDelete("6adf3f4d2447994d58ddb8a8")
    console.log("Recipe successfully deleted")
    }
    catch(err){
        consol.log("ERROR: " + err)
    }
}

deletOneRecipeByItsID()