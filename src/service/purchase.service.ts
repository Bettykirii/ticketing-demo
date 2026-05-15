import Event from "../models/event.model";
import TicketTier from "../models/ticketTier.model";
import Order from "../models/order.model";
import sequelize from "../config/database";



export async  function purchaseTickets(
    eventId: number,
    quantity: number,
    buyerName: string,
    buyerEmail: string,
  

){
    const transaction = await sequelize.transaction();

    try {
    const event  = await Event.findByPk(eventId, { transaction });
    if (!event){
        throw new Error("Event not found");
    }
    const activeTier = await TicketTier.findOne({
        where: {
            eventId: eventId,
            status: "active",
        },
        
    });
    if (!activeTier){
        throw new  Error("No active ticket tiers found for this event"
        );
    }
    const remainingTickets  = activeTier.capacity  - activeTier.soldCount;
    if (quantity > remainingTickets){
        throw new Error ("Not enough tickets available");
    }
    const price  = Number(activeTier.price);
    const  qty = Number(quantity);

    if (Number.isNaN(price)|| Number.isNaN(qty)) {
        throw new Error ("Invalid price or quantity");
    }

    const totalAmount = price * qty;

    const order = await Order.create({
        eventId,
        ticketTierId: activeTier.id,
        quantity : qty,
        buyerName,
        buyerEmail,
        totalAmount,
    }, { transaction }
);

    
    activeTier.soldCount += qty;
    await activeTier.save( { transaction });
    await transaction.commit();

    return {
        message: "Tickets purchased succesfully",
        Order,
    };
}

catch (error) {
    await transaction.rollback();
    throw error;
}

}