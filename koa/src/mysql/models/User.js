import Sequelize from 'sequelize'
import define from '../config'

export const User = define('user', {
  account: Sequelize.STRING(18),
  password: Sequelize.STRING(18),
  name: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  age: {
    type: Sequelize.INTEGER(3),
    allowNull: true,
  },
  sex: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  iphone: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  profession: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  state: {
    type: Sequelize.TINYINT(1),
    allowNull: true,
  },
});
