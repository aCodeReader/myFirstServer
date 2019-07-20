const contacts = require('../data/contacts')

const list =(req, res) => {
    res.json(contacts)
}
const show = (req, res) => {
    const found = contacts.some(contact => contact._id == req.params.id)
    if (found){
        res.send(contacts.filter(contact => contact._id == req.params.id))
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const create = (req, res) => {
    const newContacts = {
        _id: Math.floor(Math.random()*100),
        name: req.body.name,
        description: req.body.description,
    }
    if(!newContacts._id) res.status(400).json({ msg: "New contacts require an id" })
    contacts.push(newContacts)
    res.json(contacts)
}

module.exports = { 
    list, 
    show,
    create 
}