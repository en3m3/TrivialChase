const mongoose = require('mongoose');
const Tag = require('../models/tag');

exports.getAllTags = (req, res, next) => {
    const tag = Tag.find()
    .then(tag => res.status(200).json(tag))
    .then(console.log('Tags retrieved sucessfully'))
    .catch(err => res.json(err));
};

exports.getTag = (req, res, next) => {
    const tag = Tag.findById(req.params.id)
    .then(tag => res.status(200).json(tag))
    .then(console.log('tag found by ID'))
    .catch(err => res.json(err));
};

exports.postTag = (req, res, next) => {
    const tag = new Tag({
        tag: req.body.tag
    })
    tag.save().
    then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.json(err);
    });
};

exports.putTag = (req, res, next) => {
    Tag.updateOne({_id: req.params.id}, {$set: req.body})
    .then(res.status(200).json({message: 'Updated Successfully'}))
    .then(console.log('Tag updated successfully'))
    .catch(err => res.json(err));
};

exports.deleteTag = (req, res, next) => {
    Tag.deleteOne({_id: req.params.id})
    .then(res.status(200).json({message: 'Removed Successfully'}))
    .then(console.log('Tag removed successfully'))
    .catch(err => res.json(err));
};