const express = require("express");
const router = express.Router();
const Content = require('../models/content');

router.get("/", (req, res) => {
    Content.find((err, content) => {
        res.render('index', {
            title: 'Home Page',
            style: 'style.css',
            contents: content
        });
    });    
});

router.post("/", (req, res) => {

});

router.delete("/", (req, res) => {

});

module.exports = router;