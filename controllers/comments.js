const comments = require('../data/comments')

const list =(req, res) => {
    res.json(comments)
}
const show = (req, res) => {
    const found = comments.some(comment => comment._id == req.params.id)
    if (found){
        res.send(comments.filter(comment => comment._id == req.params.id))
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const create = (req, res) => {
    const newComments = {
        _id: Math.floor(Math.random()*100),
        name: req.body.name,
        description: req.body.description,
    }
    if(!newComments._id) res.status(400).json({ msg: "New comments require an id" })
    comments.push(newComments)
    res.json(comments)
}

module.exports = { 
    list, 
    show,
    create 
}