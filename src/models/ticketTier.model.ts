import { DataTypes,Model } from "sequelize";
import sequelize from "../config/database";

import Event from "./event.model";

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
        references: {
            model: Event,
            key: 'id',
        },
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
        defaultValue: 0,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "upcoming",
    },
  },
  {
    sequelize,
    modelName: 'TicketTier',
    tableName: 'ticket_tiers',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['eventId', 'tierNumber'],
        },

        {
            fields: [  'eventId', 'status']
        },

        
    ],
  })
  export default TicketTier;