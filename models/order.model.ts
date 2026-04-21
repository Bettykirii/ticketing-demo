

  import { DataTypes,Model } from "sequelize";
  import sequelize from "../src/config/database";

  class Order extends Model {}

  Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ticketTierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    buyerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    buyerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    paymentStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,
  }
)