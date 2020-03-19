const express = require('express')

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).json({error: "Could not get recipes."})
        })
})

module.exports = router;