const vehicles = require('../data/vehicles')

const list =(req, res) => {
    res.json(vehicles)
}
const show = (req, res) => {
    const found = vehicles.some(vehicle => vehicle._id == req.params.id)
    if (found){
        res.send(vehicles.filter(vehicle => vehicle._id == req.params.id))
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const create = (req, res) => {
    const newVehicles = {
        _id: Math.floor(Math.random()*100),
        name: req.body.name,
        description: req.body.description,
    }
    if(!newVehicles._id) res.status(400).json({ msg: "New vehicles require an id" })
    vehicles.push(newVehicles)
    res.json(vehicles)
}

module.exports = { 
    list, 
    show,
    create 
}