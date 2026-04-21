import { DataTypes,Model } from "sequelize";
import sequelize from "../src/config/database";

  class TicketTier extends Model {}

  TicketTier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tierNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    soldCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'TicketTier',
    tableName: 'ticket_tiers',
    timestamps: true,
  })
  export default TicketTier;