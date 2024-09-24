const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', Controller.getTodos)
router.post('/', Controller.createTodos)
router.put('/:id', Controller.updateTodos)
router.delete('/:id', Controller.deleteTodos)

module.exports = router