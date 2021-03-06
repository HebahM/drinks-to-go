// ******************************************************************************************************
// orderitems.js [OrderItems Table Model]
// ******************************************************************************************************
'use strict';
module.exports = function (sequelize, Sequelize) {
  var OrderItem = sequelize.define("OrderItem", {
    id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    oid: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    cid: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    order_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    pid: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    item_no: {
      type: Sequelize.INTEGER(5),
      allowNull: false
    },
    prod_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    size: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    qty: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue : "Pending"
    },
    complete: {
      type: Sequelize.TINYINT(1),
      allowNull: false,
      defaultValue : 0
    },
    ready: {
      type: Sequelize.TINYINT(1),
      allowNull: false,
      defaultValue : 0
    }
  }, { timestamps: false });

  OrderItem.associate = function (db) {
    db.OrderItem.belongsTo(db.Order, {
      foreignKey: "oid",
      onDelete: "CASCADE"
    });
  };
  return OrderItem;
};