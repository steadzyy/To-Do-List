const { Todo } = require("../models");

class Controller {
  static async getTodos(req, res) {
    try {
      let todos = await Todo.findAll();
      res.status(201).json(todos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async createTodos(req, res) {
    try {
      let { todoName, todo } = req.body;
      let newTodo = await Todo.create({ todoName, todo });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async updateTodos(req, res) {
    try {
      let { id } = req.params;
      let todo = await Todo.findByPk(id);
      if (!todo) {
        throw { name: "Todos not found" };
      }
      await todo.update(req.body, {
        where: {
          id: id,
        },
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async deleteTodos(req, res) {
    try {
      let { id } = req.params;
      let todo = await Todo.findByPk(id);
      if (!todo) {
        throw { name: "Todo not found" };
      }
      await todo.destroy({
        where: {
          id: id,
        },
      });
      res
        .status(200)
        .json({ message: `${todo.todoName} successfully deleted` });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

}

module.exports = Controller;
