import Event from "../models/event.model";
import TicketTier from "../models/ticketTier.model";
import Order from "../models/order.model";


export async  function purchaseTickets(
    eventId: number,
    quantity: number,
    buyerName: string,
    buyerEmail: string,
  

){
    const event  = await Event.findByPk(eventId);
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
    });
    activeTier.soldCount += qty;
    await activeTier.save();
    

}