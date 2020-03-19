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

router.get('/:id/shoppinglist', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then((list) => {
            res.status(200).json(list)
        })
        .catch((err) => {
            res.status(500).json({error: "Couldn't get list."})
        })

})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then((instructions) => {
        res.status(200).json(instructions)
    })
    .catch((err) => {
        res.status(500).json({error: "Couldn't get instructions."})
    })

})

module.exports = router;