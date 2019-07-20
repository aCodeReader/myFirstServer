const products = require('../data/products')

const list =(req, res) => {
    res.json(products)
}
const show = (req, res) => {
    const found = products.some(product => product._id == req.params.id)
    if (found){
        res.send(products.filter(product => product._id == req.params.id))
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const create = (req, res) => {
    const newProduct = {
        _id: Math.floor(Math.random()*100),
        name: req.body.name,
        description: req.body.description,
    }
    if(!newProduct._id) res.status(400).json({ msg: "New products require an id" })
    products.push(newProduct)
    res.json(products)
}

module.exports = { 
    list, 
    show,
    create 
}