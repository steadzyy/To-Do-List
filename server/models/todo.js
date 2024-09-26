'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init({
    todoName:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "todoName cannot be null"
        },
        notEmpty: {
          msg: "todoName cannot be an empty string"
        }
      },
    },
    todo:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "todo cannot be null"
        },
        notEmpty: {
          msg: "todo cannot be an empty string"
        }
      },
    },
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};