import Sequelize from 'sequelize'

let config = null;

process.env.NODE_ENV === 'development' ?
  config = require('./config-dev') :
  config = require('./config-build');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功！');
  })
  .catch(err => {
    console.error('数据库连接失败:', err);
  });

export default (name, attributes) => {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.id = {
    type: Sequelize.INTEGER(50),
    primaryKey: true,
  };
  attrs.createDate = {
    type: Sequelize.NOW,
    allowNull: false
  };
  attrs.updateDate = {
    type: Sequelize.NOW,
    allowNull: false
  };
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    freezeTableName: true,
    hooks: {
      beforeValidate: function (obj) {
        let now = new Date();
        if (obj.isNewRecord) {
          obj.createDate = now;
          obj.updateDate = now;
        } else {
          obj.updateDate = now;
        }
      }
    }
  });
};
