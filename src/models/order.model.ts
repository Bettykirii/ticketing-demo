

  import { DataTypes,Model } from "sequelize";
  import sequelize from "../config/database";
  import Event from "./event.model";
import TicketTier from "./ticketTier.model";

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
        references: {
            model: Event,
            key: 'id',
        },
    },
    ticketTierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TicketTier,
            key: 'id',
        },
    },
    buyerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    buyerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
    },
    paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,

    indexes: [
        {
            fields: [ 'eventId']
        },
        {
            fields: [ 'ticketTierId'],
        },
        {
            fields: [ 'buyerEmail' ],
        },
    ]
  }
)

export default Order;