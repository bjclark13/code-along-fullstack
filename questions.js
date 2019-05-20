const express = require('express');

const questions = express.Router();
const questionData = require('./questionData');

questions.get('/', (req,res) => {
    res.send(questionData);
});

/**
 * Get a specific question
 */
questions.get('/:id', (req,res) => {
    // Getting the ID from the URL and setting it
    // to the array
    let index = req.params.id; 

    // If exists inside of array
    if ( questionData[index] ) {
        res.send(questionData[index]);
    } else {
        // Something went wrong
        res.send('Hey, that\'s not a valid question!'); 
    }

    res.send('Hello, World');
});

module.exports = questions;
