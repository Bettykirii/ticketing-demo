// for the event we need the event id and event name 
//probably the location
//for the tickets-
//ticket id, ticket amount, tickettier id , soldticktets,the remianining tickets

//for the order/user
//user name,email,ticketid,eventid, amount,payment processed(status)quanitity

//purchase flow
// check event exists
// get active tier for the event
// validate buyer email
// validate quantity
// calculate remaining tickets using capacity - soldCount
// if requested quantity is greater than remaining, reject
// calculate total amount from tier price * quantity
// create order
// if payment succeeds, mark order as paid
// increase soldCount
// if soldCount equals capacity, mark tier as sold_out
// find next tier and mark it active
// return success response
// send confirmation email


import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";


class Event extends Model {}


Event.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: true,
  }
)
 export default Event;